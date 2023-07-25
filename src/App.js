import { Todolist } from "./component/todolist";
import { Todoform } from "./component/addtodoform";

const todos = [
  {
    id: 1,
    text: "Task 1",
    isCompleted: true,
  },
  {
    id: 2,
    text: "Task 2",
    isCompleted: false,
  },
  {
    id: 3,
    text: "Task 3",
    isCompleted: false,
  },
];
export function App() {
  return (
    <div className="App">
      <div className="card rounded shadow-sm">
        <div className="card-body">
          <h3 className="card-title mb-3">My Todo List</h3>
          <Todolist todos={todos} />
          <Todoform />
        </div>
      </div>
    </div>
  );
}
export default App;
