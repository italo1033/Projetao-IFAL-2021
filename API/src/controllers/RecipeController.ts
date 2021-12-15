import { response, Response } from "express";

interface TypedRequestBody<T> extends Express.Request {
    body: T
}

export default {
    indexRecipes: (req: any,res:Response) => {
        const payload = req.decoded;

        if(payload.username == "will"){
            res.status(200).json({msg:"Hello Will"})
        }else{
            res.status(403).json({msg:"Authentication error"});
        }
    }
}