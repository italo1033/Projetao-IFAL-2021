import { response, Response } from "express";
const dataset = require ("../datasets/sample_tudogostoso.json");

interface TypedRequestBody<T> extends Express.Request {
    body: T
}
interface Recipe {
    ingredients: any
}
export default {
    indexRecipes: (req: TypedRequestBody<{ ingredients: Array<string> }>, res: Response) => {
        const { ingredients } = req.body;
        

    
        let validRecipes: Array<Object> = []

        dataset.forEach((recipe: Recipe) => {
            let matchValue = 0;
            let ingredientsCount = 0;
            Object.keys(recipe.ingredients).forEach(ingredientClass => {
                recipe.ingredients[ingredientClass].forEach((ingredient: string) => {
                    ingredients.forEach(searchedIngredient => {
                        ingredientsCount ++
                        if (ingredient.indexOf(searchedIngredient) != -1) {
                            matchValue++
                        }
                    });
                });
            });
            if (matchValue == ingredientsCount) {
                validRecipes.push(recipe)
            }
        });

        res.status(200).json({ data: { recipes: validRecipes } })
    }
}