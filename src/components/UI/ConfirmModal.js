import React from "react";
import ReactDOM from "react-dom";
import classes from "./ConfirmModal.module.css";

const Backdrop = function (props) {
  const onClickHandler = function () {
    props.onConfirm();
    console.log("reqached");
  };
  return (
    <div className={classes.box}  >
      <p>Are you sure you completed the task</p>
      <button type="submit" onClick={onClickHandler}>
        deleteeeeeee
      </button>
    </div>
  )
};

const ConfirmModal = function (props) {
  return( <div>
 { ReactDOM.createPortal(
    <Backdrop onConfirm ={props.onClickk}/>,
    document.getElementById("myportal")
  )}j
  </div>);
};

export default ConfirmModal;
