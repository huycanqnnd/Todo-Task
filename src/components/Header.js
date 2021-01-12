import React from "react";
import classes from "./Header.module.css";
import { PlusOutlined } from "@ant-design/icons";

function Header({ addTaskItem, inputTask, setInputTask }) {
  return (
    <header className={classes.heading}>
      <h1>To-do Tasks</h1>
      <div>
        <input
          type="text"
          placeholder="Add a task"
          value={inputTask}
          onChange={(event) => setInputTask(event.target.value)}
        />
        <button onClick={() => addTaskItem()}>
          <PlusOutlined />
        </button>
      </div>
    </header>
  );
}

export default Header;
