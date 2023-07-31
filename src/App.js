import { useState } from "react";
import React from "react";

// const todos = [
//   {
//     id: 1,
//     text: "Task 1",
//     isCompleted: true,
//   },
//   {
//     id: 2,
//     text: "Task 2",
//     isCompleted: false,
//   },
//   {
//     id: 3,
//     text: "Task 3",
//     isCompleted: false,
//   },
// ];

export const App = (props) => {
  const [input, setInput] = useState("");
  const [input2, setInput2] = useState([]);

  const add = () => {
    setInput2([...input2, input]);
    setInput("");
  };

  return (
    <div className="App">
      <div className="card rounded shadow-sm">
        <div className="card-body">
          <h3 className="card-title mb-3">My Todo List</h3>
          <div>
            <ul className="list-group">
              <div>
                {input2.map((item, index) => (
                  <li
                    className="list-group-item d-flex justify-content-between align-items-center"
                    key={index}
                  >
                    <div>
                      <button
                        onClick={() => {
                          const newDone = input2.map((done) => {
                            if (done.id === item.id) {
                              const doneTodos = { ...done };
                              if (done.isCompleted === true) {
                                doneTodos.isCompleted = false;
                              } else if (done.isCompleted === false) {
                                doneTodos.isCompleted = true;
                              }
                              return doneTodos;
                            } else {
                              return done;
                            }
                          });
                          setInput2(newDone);
                        }}
                        className={`btn btn-sm ${
                          item.isCompleted ? "btn-success" : "btn-light"
                        }`}
                      >
                        <i
                          className={`bi ${
                            item.isCompleted ? "bi-check-square" : "bi-square"
                          }`}
                        ></i>
                      </button>
                      {item.isCompleted ? (
                        <span className="ms-2 text-decoration-line-through">
                          {item.text}
                        </span>
                      ) : (
                        <span className="ms-2">{item.text}</span>
                      )}
                    </div>
                    <button
                      className="btn btn-sm btn-danger"
                      onClick={() => {
                        const newInput = input2.filter(
                          (num) => num.id !== item.id
                        );
                        setInput2(newInput);
                      }}
                    >
                      <i className="bi bi-trash"></i>
                    </button>
                  </li>
                ))}
              </div>
              <div>
                <form
                  className="d-flex justify-content-between align-items-center"
                  onSubmit={(event) => {
                    event.preventDefault();
                    const newInput = [...input2];
                    newInput.push({
                      id: Math.random(),
                      // id: newInput.length + 1,
                      text: input,
                      isCompleted: false,
                    });
                    setInput2(newInput);
                    setInput("");
                  }}
                >
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Add new item..."
                    value={input}
                    onChange={(event) => {
                      setInput(event.target.value);
                    }}
                  />
                  <button className="btn btn-primary btn-sm rounded ms-2">
                    Add
                  </button>
                </form>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default App;
