import React from 'react';
import NavBar from './NavBar.js';
import MealPlan from './MealPlan.js';
import EditMeal from './EditMeal.js';

class Controller extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isPlanPageSelected: true,
      isEditPageSelected: false
    }
  }

  render() {
    const isPlanPageSelected = this.state.isPlanPageSelected;
    let selectedPage;

    if (isPlanPageSelected) {
      selectedPage = "plan";
    } else {
      selectedPage = "edit";
    }
    const visiblePage = selectedPage === "plan" ? <MealPlan /> : <EditMeal />

    return (
      <div>
        <React.StrictMode>
          <NavBar
            selected={selectedPage}
            onClickEdit={() => this.toggleSelectedPage("edit")}
            onClickPlan={() => this.toggleSelectedPage("plan")}
          />
          {visiblePage}
        </React.StrictMode>
      </div>
    );
  }

  toggleSelectedPage(selection) {
    if((selection === "plan" && this.state.isPlanPageSelected)
        || (selection === "edit" && this.state.isEditPageSelected)) {
      return // Do nothing.
    }
    if (this.state.isPlanPageSelected) {
      this.setState({
        isPlanPageSelected: false,
        isEditPageSelected: true,
      })
    } else {
      this.setState({
        isPlanPageSelected: true,
        isEditPageSelected: false,
      })
    }
  }
}

export default Controller;