const express=require('express');
const Router=express.Router();
const {getMeals,getMeal}=require("../Controller/mealController");
Router.get("/meals",getMeals);
Router.get("/meals/:id",getMeal);
module.exports=Router;