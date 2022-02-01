import React from "react";
import Cloud1 from "./cloud1";
import Titletext from "./titletext";
import Cloud2 from "./cloud2";
import Land from "./land";
import Star from "./star"

class Stars extends React.Component {
  render() {

    return (
      <div className="stars">
        <Cloud1></Cloud1>
        <Titletext></Titletext>
        <Cloud2></Cloud2>
        <Land />
        <Star />
      </div>
    );
  }
}

export default Stars;
