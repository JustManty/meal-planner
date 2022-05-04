import './../App.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {solid} from "@fortawesome/fontawesome-svg-core/import.macro";

function NavBar(props) {

  return (
    <div>
      <ul className={"top-nav"}>
        <li>
          <FontAwesomeIcon icon={solid('utensils')} size={"2xs"}/>
          <button
            className={`${props.selected === "plan" ? "selected" : "unselected"}`}
            onClick={props.onClickPlan}>Plan</button>
        </li>
        <li>
          <FontAwesomeIcon icon={solid('pen-to-square')} size={"2xs"} />
          <button
            className={`${props.selected === "edit" ? "selected" : "unselected"}`}
            onClick={props.onClickEdit}>Edit</button>
        </li>
      </ul>
      <hr
        className={"top-nav-hr"}
      />
    </div>
  );
}

export default NavBar;