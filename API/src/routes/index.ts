import { IRouter } from "express";
import recipes from "./recipes";
import users from "./users";

export default function(router:IRouter) {
    recipes(router);
    users(router);
    return router;   
}