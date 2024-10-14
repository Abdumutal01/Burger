import React, { Component } from "react";
import './BurgerIngredient.css';

function BurgerIngredient(props) {
    let burgerIngredients = null;

    switch (props.type) {
        case ("bread-top"):
            burgerIngredients = <div className="BreadTop">
                <div className="Seeds1"></div>
                <div className="Seeds2"></div>
            </div>;
            break;
        case ("bread-bottom"):
            burgerIngredients = <div className="BreadBottom"></div>;
            break;
        case ("meat"):
            burgerIngredients = <div className="Meat"> </div>;
            break;
        case ("cheese"):
            burgerIngredients = <div className="Cheese"> </div>;
            break;
        case ("salad"):
            burgerIngredients = <div className="Salad"> </div>;
            break;
        case ("bacon"):
            burgerIngredients = <div className="Bacon"> </div>;
            break;


        default: burgerIngredients = null;
    }

    return burgerIngredients;
}

export default BurgerIngredient
