import React from "react";
import Meal from './Meal.js';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {solid} from "@fortawesome/fontawesome-svg-core/import.macro";

class MealPlan extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mealData: []
    };
    this.addMeal = this.addMeal.bind(this);
  }

  addMeal() {
    let availableRecipes = JSON.parse(localStorage.getItem("savedRecipeList")).recipes
    let newMealData = {
      mealName: availableRecipes[Math.floor(Math.random() * availableRecipes.length)]
    }
    let newMealList = this.state.mealData
    newMealList.push(newMealData)
    this.setState({
      mealData: newMealList,
    });
  }

  handleRemoveMeal(i) {
    let mealList = this.state.mealData
    mealList.slice(i, 1)
    this.setState({
      mealData: mealList
    })
  }

  render() {
    return (
      <div>
        { this.state.mealData.length > 0 &&
          <ul>{this.state.mealData.map(function (data, index) {
            return (
              <Meal
                key={index}
                mealName={data.mealName}
                mealNumber={index + 1}
                handleRemoveMeal={this.handleRemoveMeal}/>
            )
          }.bind(this))}</ul>
        }
        <button
          className={"addMeal"}
          onClick={this.addMeal}>
          <FontAwesomeIcon
            className={"addMealIcon"}
            icon={solid("plus")} />
          Add a Meal
        </button>
        <button
          className={"generateShoppingList"}
        >
          <FontAwesomeIcon
            className={"generateShoppingListIcon"}
            icon={solid("list-check")}
          />
          Generate Shopping List
        </button>
      </div>
    );
  }
}

export default MealPlan;