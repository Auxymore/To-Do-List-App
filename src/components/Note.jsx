import React, { useState } from "react";
import DeleteIcon from "@material-ui/icons/Delete";

function Note(props) {

  const [currentDate, setDate] = useState(
    new Date().toLocaleDateString("en-GB") + " at " + new Date().toLocaleTimeString("en-US")
  )
  function handleClick() {
    props.onDelete(props.id);
    setDate(currentDate)

  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p className="content">{props.content}</p>
      <button onClick={handleClick}>
        <DeleteIcon />
      </button>
      <p className="current-date">{currentDate}</p>
    </div>
  );
}

export default Note;
