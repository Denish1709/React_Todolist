export const Todoitem = (props) => {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <div>
        <button
          className={`btn btn-sm ${
            props.item.isCompleted ? "btn-success" : "btn-light"
          }`}
        >
          <i
            className={`bi ${
              props.item.isCompleted ? "bi-check-square" : "bi-square"
            }`}
          ></i>
        </button>
        <span className="ms-2">{props.item.text}</span>
      </div>
      <div>
        <button className="btn btn-sm btn-danger">
          <i className="bi bi-trash"></i>
        </button>
      </div>
    </li>
  );
};
