import React, { useState } from "react";
import classes from "./Input.module.css";
import DateInput from "./DateInput";
import ConfirmModal from "../UI/ConfirmModal";
const NOTES = [];
const Input = function () {
  const [title, setTitle] = useState("");
  const [notes, SetNotes] = useState(NOTES);
  const [isDeleting, setIsDeleting] = useState(null);

  const OnchangeHandler = function (event) {
    setTitle(event.target.value);
    console.log(title);
  };
  var startDate, endDate;

  function setStartDate(date) {
    startDate = date;
    console.log(startDate);
  }

  function setEndDate(date) {
    endDate = date;
  }

  const onSubmitHandler = function (event) {
    event.preventDefault();
    const note = {
      id: Math.random().toString(16).slice(2),
      title,
      startDate,
      endDate,
    };
    SetNotes([...notes, note]);

    // console.log(notes);
    setTitle("");
  };

  const RenderingDynamic = notes.map((item) => {
    return (
      <div key={item.id} className={classes.boxes}>
        <ul>{item.id}</ul>
        <ul>{item.title}</ul>
        <ul>You have to start by :{item.startDate}</ul>
        <ul>You need to finish the task till {item.endDate}</ul>
        <button
          type="cancel"
          onClick={() => {
            setIsDeleting(item);
          }}
          className={classes.cnclbtn}
        >
          Task Completed
        </button>
      </div>
    );
  });

  const deleteNote = () => {
    console.log("Working");
    console.log(isDeleting);
    const NewRenderingList = notes.filter((element) => {
      return element.id !== isDeleting.id;
    });

    setIsDeleting(null);
    SetNotes(NewRenderingList);
  };

  return (
    <>
      {isDeleting && <ConfirmModal onClickk ={deleteNote} />}
      <form onSubmit={onSubmitHandler}>
        <input
          className={classes.inputcss}
          type="text"
          placeholder="Enter what you want to add"
          value={title}
          onChange={OnchangeHandler}
        />
        <DateInput
          value="Enter the date when you wish to start"
          fun={setStartDate}
        />
        <DateInput value="Enter your deadline" fun={setEndDate} />

        <button className={classes.btn}>Add to list</button>
      </form>
      <div className={classes.gridbox}>{RenderingDynamic}</div>
    </>
  );
};

export default Input;
