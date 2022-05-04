function Measurement(props) {
  return (
    <div>
      <p className={"ingredient-label"}>{props.quantity + " " + props.measurement}</p>
    </div>
  );
}

export default Measurement;