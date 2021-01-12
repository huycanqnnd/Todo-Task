import { useState } from "react";
import "./App.css";

import Header from "./components/Header";
import TaskList from "./components/TaskList";
import { v4 as uuidv4 } from "uuid";
import CompleteTask from "./components/CompleteTask";

function App() {
  let [inputTask, setInputTask] = useState("");

  let [listTask, setListTask] = useState({ list: [] });

  function addTaskItem() {
    let newList = [];
    if (inputTask) {
      let itemFilter = listTask.list.filter((p) => {
        if (p.name.toUpperCase() === inputTask.toUpperCase()) {
          return p;
        } else return null;
      });
      console.log("item", itemFilter);
      if (itemFilter.length <= 0) {
        var newTast = {
          id: uuidv4(),
          name: inputTask,
          createDate: new Date().getTime(),
          favorite: false,
          isComplete: false,
          completeDate: "",
        };

        newList = listTask.list.concat(newTast);

        setListTask({ ...listTask, list: newList });
      }
    }
    setInputTask("");
  }
  return (
    <div className="App">
      <Header
        inputTask={inputTask}
        setInputTask={setInputTask}
        addTaskItem={() => addTaskItem()}
      />

      <TaskList listTask={listTask.list} />

      <CompleteTask listTask={listTask.list} />
    </div>
  );
}

export default App;
