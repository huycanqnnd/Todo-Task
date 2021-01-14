import { useState } from "react";
import "./App.css";

import Header from "./components/Header";
import TaskList from "./components/TaskList";
import { v4 as uuidv4 } from "uuid";
import CompleteTask from "./components/CompleteTask";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  // const [starId, setStarId] = useState("");

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const addTask = () => {
    setTasks([
      ...tasks,
      {
        id: uuidv4(),
        text: task,
        createDate: new Date().getTime(),
        completed: false,
        isFavorite: false,
        completeDate: "",
      },
    ]);
    setTask("");
  };

  const maskTaskCompleted = (id) => {
    const tas = tasks.find((tas) => tas.id === id);
    tas.isCompleted = true;
    tas.completeDate = new Date().getTime();
    setTasks((tasks) =>
      [tas, ...tasks.filter((item) => item.id !== id)].sort(
        (a, b) => a.id - b.id
      )
    );
  };

  const incompleteItems = tasks.filter((item) => !item.isCompleted);
  console.log(incompleteItems);

  const onHandleFavorite = (id) => {
    const findId = tasks.find((item) => item.id === id);

    findId.isFavorite = true;

    setTasks((tasks) => [findId, ...tasks.filter((item) => item.id !== id)]);
  };

  const maskTaskUncompleted = (id) => {
    const tas = tasks.find((tas) => tas.id === id);

    tas.isCompleted = false;
    tas.completeDate = "";
    setTasks((tasks) =>
      [...tasks.filter((item) => item.id !== id), tas].sort(
        (a, b) => b.isFavorite - a.isFavorite
      )
    );
  };

  const completeItems = tasks.filter((item) => item.isCompleted);

  return (
    <div className="App">
      <Header task={task} handleChange={handleChange} addTask={addTask} />
      <TaskList
        maskTaskCompleted={maskTaskCompleted}
        incompleteItems={incompleteItems}
        onHandleFavorite={onHandleFavorite}
      />
      <CompleteTask
        completeItems={completeItems}
        maskTaskUncompleted={maskTaskUncompleted}
      />
    </div>
  );
}

export default App;
