import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {solid} from "@fortawesome/fontawesome-svg-core/import.macro";
import React from "react";

function EditNavigator(props) {
  return (
    <div>
      {!props.editEnabled &&
        <button
          className={"addMeal"}
          onClick={() => props.onToggleEnabled()}>
          <FontAwesomeIcon
            className={"addMealIcon"}
            icon={solid("plus")}/>
          New Recipe
        </button>
      }
      <div className={"searchBoxContainer"}>
        <input
          className={"searchBox"}
          id={"mealSearchBox"}
          type={"text"}
          placeholder={"Search..."} />
        <button
          className={"searchBoxSubmitButton"}
          onClick={() => {props.onToggleEnabled(); props.onClick(document.getElementById("mealSearchBox").value)}}>
          <FontAwesomeIcon className={"searchBoxSubmitButtonIcon"} icon={solid("magnifying-glass")} />
        </button>
      </div>
    </div>
  );
}

export default EditNavigator;