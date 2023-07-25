import { Todoitem } from "./todoitem";

export const Todolist = (props) => {
  return (
    <div>
      <ul className="list-group">
        {props.todos.map((item) => {
          return <Todoitem item={item} key={item.id} />;
        })}
      </ul>
    </div>
  );
};
