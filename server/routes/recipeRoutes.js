import express from "express";
const router = express.Router();
//Routes for the API endpoints go here...
import {
  getRecipe,
  createRecipe,
  getSingleRecipe,
  updateRecipe,
  getsaveRecipesId,
  getSaveRecipes,
} from "../controllers/recipeController.js";

router.get("/", getRecipe);
router.post("/recipe", createRecipe);
router.get("/recipe/:recipeId", getSingleRecipe);
router.put("/recipe/", updateRecipe);
router.get("/ids/:userId", getsaveRecipesId);
router.get("/recipe/:userId", getSaveRecipes);

export default router;
