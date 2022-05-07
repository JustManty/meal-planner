import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {solid} from "@fortawesome/fontawesome-svg-core/import.macro";
import React from "react";

class Ingredient extends React.Component {
  constructor(props) {
    super(props);
    this.getIngredientObject = this.getIngredientObject.bind(this)
  }

  getIngredientObject(field, value) {
    return {
      name: field === "name" ? value : document.getElementById("ingredientNameInput" + this.props.ingredientNumber).value,
      measurement: field === "measurement" ? value : document.getElementById("measurementInput" + this.props.ingredientNumber).value,
      quantity: field === "quantity" ? value : document.getElementById("quantityInput" + this.props.ingredientNumber).value
    }
  }

  render() {
    return (
      <div className={"ingredient"}>
        <div className={"ingredientMeasurementInfo"}>
          <input
            className={"ingredientQuantity"}
            id={"quantityInput" + this.props.ingredientNumber}
            onChange={(e) => {
              this.props.onUpdate(this.props.ingredientNumber, this.getIngredientObject("quantity", e.target.value));
            }}
            type={"text"}
            value={this.props.quantity}/>
          <input
            className={"ingredientMeasurement"}
            id={"measurementInput" + this.props.ingredientNumber}
            onChange={(e) => {
              this.props.onUpdate(this.props.ingredientNumber, this.getIngredientObject("measurement", e.target.value))
            }}
            type={"text"}
            placeholder={"cups"}
            value={this.props.measurement}/>
        </div>
        <input
          className={"ingredientName"}
          id={"ingredientNameInput" + this.props.ingredientNumber}
          onChange={(e) => {
            this.props.onUpdate(this.props.ingredientNumber, this.getIngredientObject("name", e.target.value))
          }}
          placeholder={"e.g. Shredded Cheese"}
          type={"text"}
          value={this.props.name} />
        <button className={'deleteIngredientButton'} onClick={() => this.props.onRemoveIngredient(this.props.name)}>
          <FontAwesomeIcon className={'deleteIngredientButtonIcon'} icon={solid('trash-can')}/>
        </button>
      </div>
    );
  }
}

export default Ingredient;