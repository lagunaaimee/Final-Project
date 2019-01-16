import React from "react";
import homeImage from "../../images/apartments.jpg";

const jumboStyle = {
  width: "2000px",
  height: "1000px",
  clear: "both",
  paddingTop: "120px",
  textAlign: "center",
  backgroundImage: "url(" + homeImage  + ")"
};
console.log(jumboStyle)
const Jumbotron = () => (
  <div style={jumboStyle}></div>
);

export default Jumbotron;
