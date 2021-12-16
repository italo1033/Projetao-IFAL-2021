import { Response } from "express"
import jwt from 'jsonwebtoken';

interface TypedRequestBody<T> extends Express.Request {
    body: T
}

export default {
    login: (req: TypedRequestBody<{ username: string, password: string, role: string }>,res:Response) => {
        const {password,username, role} = req.body;
        if (password == "12345" && username == "will") {

            // Generate an access token
            const accessToken = jwt.sign({ username,  role }, process.env.JWT_SECRET!,{expiresIn:"5m"});
    
            res.status(200).json({
                accessToken
            });
        } else {
            res.status(401).json({error:"Email or password incorrect"});
        }
    },
}