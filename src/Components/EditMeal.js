import EditNavigator from './EditNavigator.js';
import Recipe from './Recipe.js';
import './../App.css';
import React from "react";

class EditMeal extends React.Component {
  constructor(props) {
    super(props);
    this.clearRecipe = this.clearRecipe.bind(this);
    this.getRecipe = this.getRecipe.bind(this);
    this.removeIngredient = this.removeIngredient.bind(this)
    this.saveRecipe = this.saveRecipe.bind(this);
    this.toggleEnabled = this.toggleEnabled.bind(this)
    this.state = {
      editEnabled: false,
      recipe: {name: null, ingredients: []},
    }
  }

  clearRecipe() {
    this.setState({
      recipe: {name: null, ingredients: []},
    })
  }

  getRecipe(recipeName) {
    console.debug("getRecipe for " + recipeName + "!")
    let newRecipe = JSON.parse(localStorage.getItem(recipeName)) ?? {}
    this.setState({
      editEnabled: this.state.editEnabled,
      recipe: newRecipe,
    })
  }

  removeIngredient(ingredientName) {
    let newRecipe = {name: this.state.recipe.name, ingredients: []}
    for (const ingredient in this.state.recipe.ingredients) {
      if(ingredient.name !== ingredientName) {
        newRecipe.ingredients.push(ingredient)
      }
    }
    this.setState({
      editEnabled: this.state.editEnabled,
      recipe: newRecipe,
    })
  }

  saveRecipe() {
    localStorage.setItem(this.state.recipe.name, JSON.stringify(this.state.recipe));
    this.clearRecipe()
  }

  toggleEnabled() {
    let newSetting = !this.state.editEnabled;
    this.setState({
      editEnabled: newSetting,
      recipe: this.state.recipe,
    })
  }

  render() {
    return (
      <div>
        <EditNavigator
          editEnabled={this.state.editEnabled}
          onClick={this.getRecipe}
          onToggleEnabled={this.toggleEnabled}/>
        <Recipe
          editEnabled={this.state.editEnabled}
          onClearRecipe={this.clearRecipe}
          onRemoveIngredient={this.removeIngredient}
          onSaveRecipe={this.saveRecipe}
          onToggleEnabled={this.toggleEnabled}
          selectedRecipe={this.state.recipe}/>
      </div>
    );
  }
}

export default EditMeal;