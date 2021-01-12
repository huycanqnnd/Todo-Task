import { StarOutlined, StarTwoTone } from "@ant-design/icons";
function TaskItem({
  id,
  name,
  createDate,
  favorite,
  isComplete,
  onChangeComplete,
  onChangeFavorite,
}) {
  function itemFavorite() {
    if (favorite === true) {
      return <StarTwoTone onClick={() => onChangeFavorite()}></StarTwoTone>;
    } else {
      return <StarOutlined onClick={() => onChangeFavorite()}></StarOutlined>;
    }
  }

  return (
    <ul>
      <li>
        <div className="wrapItem">
          <div>
            <input
              type="checkbox"
              defaultChecked={isComplete}
              onClick={() => onChangeComplete({ id })}
            />{" "}
            <label> {name} </label>
          </div>
          <span>{itemFavorite()}</span>
        </div>
      </li>
    </ul>
  );
}
export default TaskItem;
