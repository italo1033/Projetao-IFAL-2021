import { IRouter, Router, RouterOptions } from "express";
import recipeController from "../controllers/RecipeController";
import validator from '../utils/utils';

export default function (router: IRouter){
    router.route('/recipes/').get(validator.validateToken,recipeController.indexRecipes);
}