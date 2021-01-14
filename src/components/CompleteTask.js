import React from "react";
import { StarOutlined, StarTwoTone } from "@ant-design/icons";

function CompleteTask({ completeItems, maskTaskUncompleted }) {
  return (
    <div className="completed">
      <section className="listTask">
        <div className="totalComplete">
          <span> Completed </span>
          <span>{completeItems.length}</span>
        </div>
        <ul>
          {completeItems.map((task) => {
            return (
              <li key={task.id} className="completed">
                <div className="wrapItem">
                  <input
                    name={task.text}
                    type="checkbox"
                    defaultChecked={true}
                    onClick={() => maskTaskUncompleted(task.id)}
                  />
                  <label>{task.text}</label>
                  <span>
                    {task.isFavorite === true ? (
                      <StarTwoTone />
                    ) : (
                      <StarOutlined />
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

export default CompleteTask;
