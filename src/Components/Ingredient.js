import Measurement from './Measurement.js';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {solid} from "@fortawesome/fontawesome-svg-core/import.macro";
import React from "react";

function Ingredient(props) {
  return (
    <div className={".ingredient"}>
      <Measurement measurement={props.measurement} quantity={props.quantity}/>
      <p className={"ingredient-title"}>{props.name}</p>
      <button className={'deleteIngredientButton'} onClick={props.onRemoveIngredient(props.name)}>
        <FontAwesomeIcon className={'removeButtonIcon'} icon={solid('trash-can')}/>
      </button>
    </div>
  );
}

export default Ingredient;