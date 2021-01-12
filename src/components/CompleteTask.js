import React, { useState } from "react";
import TaskItem from "./TaskItem";

function CompleteTask({ listTask }) {
  let [listData, setListTask] = useState({ list: listTask });

  function maskTasksUnComplete(id) {
    console.log("id", id);

    setListTask({
      ...listData,
      list: listTask.find((p) => {
        if (p.id === id) {
          p.isComplete = false;
          p.completeDate = "";
        }
      }),
    });
  }

  let listComplete = listTask.filter((p) => p.isComplete === true);

  var itemComplete = listComplete
    .sort(
      ({ completeDate: previous }, { completeDate: current }) =>
        current - previous
    )
    .map((p) => {
      return (
        <TaskItem
          key={p.id}
          id={p.id}
          name={p.name}
          createDate={p.createDate}
          favorite={p.favorite}
          completeDate={p.completeDate}
          isComplete={p.isComplete}
          onChangeComplete={() => maskTasksUnComplete(p.id)}
        ></TaskItem>
      );
    });

  console.log(itemComplete);

  return (
    <div className="completed">
      <section className="listTask">
        <div className="totalComplete">
          <span> Completed: </span>
          <span> {listComplete.length} task </span>
        </div>
        {itemComplete}
      </section>
    </div>
  );
}

export default CompleteTask;
