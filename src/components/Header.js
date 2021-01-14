import React from "react";
import classes from "./Header.module.css";
import { PlusOutlined } from "@ant-design/icons";

function Header({ handleChange, addTask, task }) {
  return (
    <header className={classes.heading}>
      <h1>Todo Tasks</h1>
      <div>
        <input
          type="text"
          placeholder="Add a task"
          value={task}
          onChange={handleChange}
        />
        <button onClick={() => addTask()}>
          <PlusOutlined />
        </button>
      </div>
    </header>
  );
}

export default Header;
