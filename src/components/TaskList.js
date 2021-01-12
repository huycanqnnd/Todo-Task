import React, { useState } from "react";
import TaskItem from "./TaskItem";

function TaskList({ listTask }) {
  let [listData, setListData] = useState({ list: listTask });

  function markTasksComplete(id) {
    setListData({
      ...listData,
      list: listTask.find((p) => {
        if (p.id === id) {
          p.isComplete = true;
          p.completeDate = new Date().getTime();
        }
      }),
    });
  }

  function markTasksFavorite(id) {
    setListData({
      ...listData,
      list: listTask.find((p) => {
        if (p.id === id && p.isComplete === false) {
          p.favorite = !p.favorite;
        }
      }),
    });
  }

  let listUnComplete = listTask.filter((p) => p.isComplete === false);

  var item = listUnComplete
    .sort(
      ({ createDate: previous }, { createDate: current }) => previous - current
    )
    .sort(({ favorite: previous }, { favorite: current }) => current - previous)
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
          onChangeComplete={() => markTasksComplete(p.id)}
          onChangeFavorite={() => markTasksFavorite(p.id)}
        ></TaskItem>
      );
    });

  console.log(item);

  return (
    <div>
      <section className="listTask">
        <div className="totalComplete">
          <span> Tasks: </span>
          <span> {listUnComplete.length} task </span>
        </div>
        {item}
      </section>
    </div>
  );
}
export default TaskList;
