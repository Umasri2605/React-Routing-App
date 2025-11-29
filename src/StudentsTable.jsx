import React from "react";
import students from "./assets/students.json";

function StudentsTable() {
  var [allstudents, setStudents] = React.useState([...students]);
  var [startIndex, setStartIndex] = React.useState(10);
  var [endIndex, setEndIndex] = React.useState(15);

  function sortByKey(key) {
    setStudents(function (currentStudents) {
      currentStudents.sort((a, b) => {
        if (a[key] > b[key]) return 1;
        else return -1;
      });
      return [...currentStudents];
    });
  }

  function next5() {
    setStartIndex(startIndex + 5);
    setEndIndex(endIndex + 5);
  }

  return (
    <div className="container py-5">
      <div className="card shadow-lg p-4">
        <h2 className="text-center mb-4 text-primary fw-bold">Students Table</h2>

        <div className="d-flex justify-content-end mb-3">
          <button className="btn btn-success px-4" onClick={next5}>
            Next 5 ➜
          </button>
        </div>

        <table className="table table-bordered table-hover table-striped text-center align-middle">
          <thead className="table-dark">
            <tr>
              <th>Photo</th>
              <th onClick={() => sortByKey("name")} style={{ cursor: "pointer" }}>
                Name ⬍
              </th>
              <th
                onClick={() => sortByKey("gender")}
                style={{ cursor: "pointer" }}
              >
                Gender ⬍
              </th>
              <th
                onClick={() => sortByKey("fatherName")}
                style={{ cursor: "pointer" }}
              >
                Father Name ⬍
              </th>
              <th
                onClick={() => sortByKey("motherName")}
                style={{ cursor: "pointer" }}
              >
                Mother Name ⬍
              </th>
              <th
                onClick={() => sortByKey("age")}
                style={{ cursor: "pointer" }}
              >
                Age ⬍
              </th>
            </tr>
          </thead>

          <tbody>
            {allstudents.slice(startIndex, endIndex).map((student) => {
              return (
                <tr
                  style={
                    student.gender === "Female"
                      ? { backgroundColor: "#fde2e4" }
                      : { backgroundColor: "#e0f1ff" }
                  }
                >
                  {student.gender === "Male" && (
                    <td>
                      <img
                        width="55px"
                        className="rounded-circle shadow-sm"
                        src="https://png.pngtree.com/png-vector/20190411/ourmid/pngtree-business-male-icon-vector-png-image_916468.jpg"
                        alt=""
                      />
                    </td>
                  )}

                  {student.gender === "Female" && (
                    <td>
                      <img
                        width="55px"
                        className="rounded-circle shadow-sm"
                        src="https://png.pngtree.com/png-vector/20190118/ourmid/pngtree-vector-female-student-icon-png-image_326761.jpg"
                        alt=""
                      />
                    </td>
                  )}

                  <td className="fw-semibold">{student.name}</td>
                  <td>{student.gender}</td>
                  <td>{student.fatherName}</td>
                  <td>{student.motherName}</td>
                  <td>{student.age}</td>
                </tr>
              );
            })}
          </tbody>

          <tfoot className="table-secondary">
            <tr>
              <th colSpan="6" className="text-center py-3">
                Students Completed ✔️
              </th>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}
export default StudentsTable;
