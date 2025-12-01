import React from "react";

function TodoList() {
  // state
  var [todo, settodo] = React.useState([
    "Uma",
    "Pravallika",
    "Raji",
    "Mounika",
    "Ramya",
  ]);
 // action
  function add() {
    var newtodo = document.getElementById("ntd").value;
    settodo((currenttodo) => {
      return [...currenttodo, newtodo];
    });
  }

  function del(index) {
    settodo((currenttodo) => {
      return currenttodo.filter((todo, i) => {
        if (index !== i) {
          return true;
        }
      });
    });
  }

  // ui
  return (
    <div className="d-flex justify-content-center align-items-start p-5 bg-light min-vh-90">
      <div className="card shadow-lg p-4" style={{ width: "400px" }}>
        <h3 className="text-center mb-4 fw-bold text-primary">Todolist</h3>

        <div className="d-flex mb-3">
          <input
            type="text"
            id="ntd"
            className="form-control me-2"
            placeholder="Enter task"
          />
          <button className="btn btn-success" onClick={() => add()}>
            Add Task
          </button>
        </div>

        <ul className="list-group">
          {todo.map((todos, i) => {
            return (
              <li
                key={i}
                className="list-group-item d-flex justify-content-between align-items-center"
              >
                {todos}
                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => {
                    del(i);
                  }}
                >
                  Delete
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default TodoList;
