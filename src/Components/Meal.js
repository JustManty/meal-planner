import './../App.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {solid} from "@fortawesome/fontawesome-svg-core/import.macro";
import React from "react";

class Meal extends React.Component {
  constructor(props) {
    super(props);
    this.removeMeal = this.removeMeal.bind(this);
  }

  getFormattedNumber(mealNumber) {
    let numbers = ['One', 'Two', 'Three', 'Four', 'Five',
      'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Eleven', 'Twelve',
      'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen',
      'Eighteen', 'Nineteen'];
    return numbers[mealNumber - 1];
  }

  removeMeal(i) {
    this.props.handleRemoveMeal(i);
  }

  render() {
    return (
      <div className={"meal"}>
        <div className={"meal-label"}>
          <p>Meal</p>
          <p>{this.getFormattedNumber(this.props.mealNumber)}</p>
        </div>
        <div className={"meal-title"}>
          <p>{this.props.mealName}</p>
        </div>
        <button className={'deleteButton'} onClick={() => this.removeMeal(this.props.mealNumber)}>
          <FontAwesomeIcon className={'deleteButtonIcon'} icon={solid('trash-can')}/>
        </button>
      </div>
    );
  }
}

export default Meal;