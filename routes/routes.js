const express = require("express");
//const express = require('express-handlebars')
const db = require("../db");

const router = express.Router();

router.get("/", (req, res) => {
  res.render("main");
});

router.get("/recipes", (req, res) => {
  db.getRecipes()
    .then(recipes => {
      console.log("I've come up with a new recipe", recipes)
      res.render("recipes", {recipes: recipes});
    })
    .catch(err => {
      console.log(err);
    });
});

router.get("/recipes/:id", (req, res)=> {
  let id = req.params.id
  db.getRecipe(id)
  .then((recipe) => {
    db.getRecipesAndIngredients(id)
    .then(ingredients => {
      recipe.ingredients = ingredients
      console.log(recipe)
      res.render('recipe', recipe)
    })
  })
 
  .catch(err => {
    res.status(500).send(err.message)
  })
})


router.get("/generateShoppingList", (req, res) => {
  res.render("main");
});
router.get("/edit/shoppinglist", (req, res) => {
  res.render("main");
});
router.post("/edit/shoppinglist", (req, res) => {
  res.render("main");
});

router.get("/recipes", (req, res) => {
  res.render("main");
});

router.post("/edit/shoppinglist", (req, res) => {
  db.adddShoppingList(req.body.add).then(() => {
    res.redirect("/");
  });
});

module.exports = router;
