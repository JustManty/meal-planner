import Ingredient from './Ingredient.js';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {solid} from "@fortawesome/fontawesome-svg-core/import.macro";
import React from "react";

class Recipe extends React.Component {
  constructor(props) {
    super(props);

    this.addIngredient = this.addIngredient.bind(this)
    this.getIngredients = this.getIngredients.bind(this)
    this.resetRecipe = this.resetRecipe.bind(this)
    this.updateIngredient = this.updateIngredient.bind(this)

    this.state = ({
      currentIngredients: this.props.selectedRecipe.ingredients,
      currentRecipeName: this.props.selectedRecipe.name
    })
  }

  addIngredient() {
    let newIngredient = {name: "", measurement: "", quantity: 0}
    let newIngredientList = this.state.currentIngredients.concat(newIngredient)

    this.setState({
      currentIngredients: newIngredientList
    })
  }

  getIngredients() {
    return this.state.currentIngredients.map((data, index) => {
      return <Ingredient
        key={index}
        measurement={data.measurement}
        ingredientName={data.name}
        quantity={data.quantity}
        onRemoveIngredient={this.props.onRemoveIngredient}/>
    })
  }

  resetRecipe() {
    this.setState({
      currentIngredients: [],
      currentRecipeName: ""
    })
  }

  updateIngredient(ingredientNumber, newIngredient) {
    let newIngredientsList = this.state.currentIngredients

    newIngredientsList[ingredientNumber] = newIngredient

    this.setState({
      currentIngredients: newIngredientsList
    })
  }

  updateRecipeName(recipeName) {
    this.setState({
      currentRecipeName: recipeName
    })
  }

  render() {
    return (
      <div>
        { this.props.editEnabled &&
          <div>
            <label className={"recipeName"}>Recipe: </label>
            <input
              type={"text"}
              className={"recipeName"}
              onChange={(e) => this.updateRecipeName(e.target.value)}
              value={this.state.currentRecipeName ?? ""}/>
            <ul>
              {this.state.currentIngredients?.map((data, index) => {
                return <Ingredient
                  key={index}
                  ingredientName={data.name}
                  ingredientNumber={index}
                  measurement={data.measurement}
                  onRemoveIngredient={this.props.onRemoveIngredient}
                  onUpdate={this.updateIngredient}
                  quantity={data.quantity}/>
              })}
            </ul>
            <button
              className={"addIngredientButton"}
              onClick={() => {this.addIngredient()}}>
              <FontAwesomeIcon
                className={"addIngredientIcon"}
                icon={solid("plus")}/>
              Add Ingredient
            </button>
            <div>
              <button
                className={"cancelButton"}
                onClick={() => {
                  this.props.onToggleEnabled()
                  this.props.onClearRecipe()
                }}>
                <FontAwesomeIcon
                  className={"cancelButtonIcon"}
                  icon={solid("ban")}/>
                Cancel Button
              </button>
              <button
                className={"saveButton"}
                onClick={() => {
                  this.props.onToggleEnabled();
                  this.props.selectedRecipe.name = this.state.currentRecipeName;
                  this.props.selectedRecipe.ingredients = this.state.currentIngredients;
                  if(this.props.selectedRecipe.name != null
                    && this.props.selectedRecipe.name !== ""
                    && this.props.selectedRecipe.ingredients.length > 0) {
                    this.props.onSaveRecipe()
                  }
                  this.resetRecipe()
                }}>
                <FontAwesomeIcon
                  className={"saveButtonIcon"}
                  icon={solid("floppy-disk")}/>
                Save Button
              </button>
            </div>
          </div>
        }
      </div>
    );
  }
}

export default Recipe;