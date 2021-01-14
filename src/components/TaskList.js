import React from "react";

import { StarOutlined, StarTwoTone } from "@ant-design/icons";

function TaskList({ incompleteItems, maskTaskCompleted, onHandleFavorite }) {
  return (
    <div className="completed">
      <section className="listTask">
        <div className="totalComplete">
          <span> InComplete </span>
          <span>{incompleteItems.length}</span>
        </div>
        <ul>
          {incompleteItems.map((task) => {
            return (
              <li key={task.id}>
                <div className="wrapItem">
                  <input
                    name={task.text}
                    type="checkbox"
                    onClick={() => maskTaskCompleted(task.id)}
                  />
                  <label>{task.text}</label>
                  <span>
                    {task.isFavorite === true ? (
                      <StarTwoTone onClick={() => onHandleFavorite(task.id)} />
                    ) : (
                      <StarOutlined onClick={() => onHandleFavorite(task.id)} />
                    )}
                  </span>
                </div>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
}

export default TaskList;
