import React from "react";
import "../css/SubHeading.css";

const SubHeading = (props) => {
  return (
    <>
      <div id="subHeading">{props.subHeading}</div>
    </>
  );
};

export default SubHeading;
