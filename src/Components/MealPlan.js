import React from "react";
import Meal from './Meal.js';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {solid} from "@fortawesome/fontawesome-svg-core/import.macro";

class MealPlan extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mealCount: 0,
      mealData: []
    };
    this.addMeal = this.addMeal.bind(this);
    this.getMealData = this.getMealData.bind(this);
  }

  addMeal() {
    const newMealCount = this.state.mealCount + 1;
    let newMealData = this.getMealData();
    this.setState({
      mealCount: newMealCount,
      mealData: newMealData,
    });
  }

  getMealData() {
    let mealData = [];
    for (let i = 0; i <= this.state.mealCount; i++) {
      mealData.push(
        {mealNumber: i + 1, mealName: "Lasagna"}
      );
    }
    return mealData;
  }

  handleRemoveMeal(i) {
    let newMealData = this.getMealData();
    newMealData = newMealData.filter((meal, index, array) => {
      return meal.mealNumber !== i;
    })
    this.setState({
      mealCount: this.state.mealCount - 1,
      mealData: newMealData,
    })
  }

  render() {
    return (
      <div>
        <ul>{this.state.mealData.map(function(data, index) {
          return (
            <Meal
              key={index}
              mealName={data.mealName}
              mealNumber={data.mealNumber}
              handleRemoveMeal={this.handleRemoveMeal}/>
          )
        }.bind(this))}</ul>
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