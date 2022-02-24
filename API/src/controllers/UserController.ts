import { Response } from "express"
import jwt from 'jsonwebtoken';
import User from '../models/user';
import bcrypt from 'bcrypt';
import Token from '../models/token';

interface TypedRequestBody<T> extends Express.Request {
    body: T
}

export default {
    login: async (req: TypedRequestBody<{ email: string, password: string }>,res:Response) => {
        const {password,email} = req.body;
        let searchedUser:any;

        try 
        {
            searchedUser = await User.findOne({ email });
        }
        catch (err)
        {
            res.status(500).send({ error: err });
        }
    
        if (searchedUser)
        {
            if (password === searchedUser.password)
            {
                const payload = { email: searchedUser.email, userId: searchedUser._id };
                const token = jwt.sign(payload, process.env.SECRET_TOKEN!, {expiresIn:'15m'});
                const refreshToken = jwt.sign(payload,process.env.SECRET_RTOKEN!,{expiresIn:'15d'})
                console.log(token,refreshToken);
                const userToken = Token({token,refreshToken,status:"loggedin"});
                try
                {
                    await userToken.save();
                    res.status(200).send({token,refreshToken});
                }
                catch (err)
                {
                    res.status(500).send({ error: err });
                }
            }
            else
            {
                res.status(401).send({error:'Invalid email or password.'});
            }
        }
        else
        {
            res.status(401).send({ error: "User not found" });
        }
    },

    register: async (req: TypedRequestBody<{ email: string, password: string, name:string, phone:string, cpf:string, birthDate:string }>,res:Response) => {
        const {email,name,password,phone,birthDate,cpf} = req.body;

        const newUser = new User({email,name,password,phone,birthDate,cpf});

        try
        {
            const result = await newUser.save();
            if (result)
            {
                res.status(201).send(result);
            }
            else
            {
                res.status(500).send({ error: result });    
            }
        }
        catch (err)
        {
            res.status(500).send({ error: err });
        }
    },

    refresh: async (req: TypedRequestBody<{refreshToken: string}>,res:Response) => {
        const {refreshToken} = req.body;
        let searchedToken;
        try
        {
            searchedToken = await Token.findOne({ refreshToken });
            console.log(searchedToken)
        }
        catch (err)
        {
            res.status(500).send({ error: err });           
        }
        
        if (searchedToken)
        {
            const options:any = {expiresIn: '15d'};
            const decoded:any = jwt.verify(
                searchedToken.refreshToken,
                process.env.SECRET_RTOKEN!,
                options
            );

            const payload = { email: decoded.email, userId: decoded.userId };
            const token = jwt.sign(payload, process.env.SECRET_TOKEN!, {expiresIn:'15m'});
            const refreshToken = jwt.sign(payload,process.env.SECRET_RTOKEN!,{expiresIn:'15d'})
            const userToken = Token({token,refreshToken,status:"loggedin"});
            try
            {
                await userToken.save();
                res.status(200).send({token,refreshToken});
            }
            catch (err)
            {
                res.status(500).send({ error: err });
            }
        }
        else
        {
            return res.status(401).send({error:"Can't refresh. Invalid Token"});
        }
    }
}