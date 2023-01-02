import React from "react";
import "../css/subHeading.css";

const SubHeading = (props) => {
  return (
    <>
      <div id="subHeading">{props.subHeading}</div>
    </>
  );
};

export default SubHeading;
