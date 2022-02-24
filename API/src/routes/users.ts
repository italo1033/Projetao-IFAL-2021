import { IRouter } from "express";
import userController from "../controllers/UserController";
import validateToken from '../utils/utils';

export default function (router: IRouter){
    router.route('/login/')
    .post(userController.login);

    router.route('/register/')
    .post(userController.register);

    router.route('/refresh/')
    .post(userController.refresh);
}