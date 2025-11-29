
import React from "react";

function Counter() {
  // state
  var [c, setc] = React.useState(0);

  // action
  function inc() {
    setc((currentval) => {
      return currentval + 1;
    });
  }
  function dec() {
    setc((currentval) => {
      return currentval - 1;
    });
  }
  function res() {
    setc(() => 0);
  }

  // ui 
  return (
    <div className="d-flex justify-content-center align-items-center vh-90 bg-light">
      <div className="card shadow-lg p-4 text-center" style={{ width: "350px" }}>
        <h3 className="mb-4 fw-bold text-primary">Counter: {c}</h3>

        <button
          className="btn bg-success-subtle border-success w-100 mb-3"
          onClick={() => {
            inc();
          }}
        >
          Increment
        </button>

        <button
          className="btn bg-danger-subtle border-danger w-100 mb-3"
          onClick={() => {
            dec();
          }}
        >
          Decrement
        </button>

        <button
          className="btn bg-info-subtle border-info w-100"
          onClick={() => {
            res();
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default Counter;


