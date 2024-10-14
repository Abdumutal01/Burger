import React, { Component } from "react";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";
import './Burger.css'

function Burger(props) {
  return (
    <div className="Burger">
      <BurgerIngredient type='bread-top' /> 
      <BurgerIngredient type='salad' /> 
      <BurgerIngredient type='meat' /> 
      <BurgerIngredient type='salad' /> 
      <BurgerIngredient type='bacon' /> 
      <BurgerIngredient type='salad' /> 
      <BurgerIngredient type='cheese' /> 
      <BurgerIngredient type='salad' /> 
      <BurgerIngredient type='bacon' /> 
      <BurgerIngredient type='salad' /> 
      <BurgerIngredient type='meat' /> 
      <BurgerIngredient type='salad' /> 
      <BurgerIngredient type='bread-bottom' /> 
    </div>
  )
}

export default Burger
