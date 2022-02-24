import { NextFunction, Response } from "express";

import jwt from 'jsonwebtoken';

export default {
    validateToken: (req:any, res:Response, next:NextFunction) => {
        const authorizatonHeader = req.headers.authorization;
        let result;

        if(authorizatonHeader){
            const token = req.headers.authorization.split(' ')[1];
            const options:any = {
                expiresIn: '15m',
            };
            try{
                result = jwt.verify(token, process.env.SECRET_TOKEN!, options);
                
                req.decoded = result;
                
                next();
            }catch (err:any) {
                throw new Error(err);
            }
        }else{
            result = {
                error: 'Authentication error. Token required.',
                status: 401
            };
            res.status(401).send(result);
        }
    },

    
};