import Ingredient from './Ingredient.js';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {solid} from "@fortawesome/fontawesome-svg-core/import.macro";
import React from "react";

class Recipe extends React.Component {
  constructor(props) {
    super(props);
    this.addIngredient = this.addIngredient.bind(this)
    this.getIngredients = this.getIngredients.bind(this)
    this.state = ({
      currentIngredients: this.props.selectedRecipe.ingredients
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

  render() {
    return (
      <div>
        { this.props.editEnabled &&
          <div>
            <label className={"recipeName"}>Recipe: </label>
            <input type={"text"} className={"recipeName"}>{this.props.selectedRecipe.name}</input>
            <ul>
              {this.props.selectedRecipe.ingredients?.map((data, index) => {
                return <Ingredient
                  key={index}
                  measurement={data.measurement}
                  ingredientName={data.name}
                  quantity={data.quantity}
                  onRemoveIngredient={this.props.onRemoveIngredient}/>
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
                  if(this.props.selectedRecipe.name != null
                    && this.props.selectedRecipe.name !== ""
                    && this.props.selectedRecipe.ingredients.length > 0) {
                    this.props.onSaveRecipe()
                  }
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