import { RecipeModel } from "../models/Recipes.js";
import { UserModel } from "../models/Users.js";

// Get all Recipes
const getRecipe = async (req, res) => {
  try {
    const result = await RecipeModel.find({});
    res.status(200).json(result);
  } catch (err) {
    res.json(err);
  }
};

// Save a Recipe
const createRecipe = async (req, res) => {
  const recipe = new RecipeModel(req.body);

  try {
    const result = await recipe.save();
    res.status(200).json({ message: "Recipe Added Successfully" });
  } catch (err) {
    res.send(err);
  }
};

// Get a recipe by ID
const getSingleRecipe = async (req, res) => {
  try {
    const result = await RecipeModel.findById(req.params.recipeId);
    res.status(200).json(result);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

// Save a Recipe
const updateRecipe = async (req, res) => {
  try {
    const recipe = await RecipeModel.findById(req.body.recipeId);
    const user = await UserModel.findById(req.body.userId);
    user.saveRecipes.push(recipe);
    await user.save();
    res.json({ saveRecipes: user.saveRecipes });
  } catch (err) {
    res.status(500).json(err);
  }
};

// Get id of saved recipes
const getsaveRecipesId = async (req, res) => {
  try {
    const user = await UserModel.findById(req.body.userId);
    res.status(200).json({ saveRecipes: user?.saveRecipes });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

// Get saved recipes
const getSaveRecipes = async (req, res) => {
  try {
    const user = await UserModel.findById(req.body.userId);
    const savedRecipes = await RecipeModel.find({
      _id: { $in: user.saveRecipes },
    });

    console.log(savedRecipes);
    res.status(201).json({ savedRecipes });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

export {
  getRecipe,
  createRecipe,
  getSingleRecipe,
  updateRecipe,
  getsaveRecipesId,
  getSaveRecipes,
};
