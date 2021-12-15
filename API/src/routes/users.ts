import { IRouter } from "express";
import userController from "../controllers/UserController";
import validateToken from '../utils/utils';

export default function (router: IRouter){
    router.route('/login/')
    .post(userController.login);
}