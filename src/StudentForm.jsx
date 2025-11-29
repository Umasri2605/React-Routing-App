import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "bootstrap/dist/css/bootstrap.min.css";

function StudentsForm() {
  const [submitData, setSubmitData] = React.useState([]);

  const studentsForm = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      gender: "",
      age: "",
      techs: [],
      country: "",
    },

    validationSchema: Yup.object({
      firstname: Yup.string()
        .required("Firstname is required")
        .min(3, "Minimum 3 characters required"),

      lastname: Yup.string()
        .required("Lastname is required")
        .min(5, "Minimum 5 characters required"),

      age: Yup.number()
        .required("Age is required")
        .positive("Age must be positive")
        .integer("Age must be a number"),
    }),

    onSubmit: (values) => {
      setSubmitData([...submitData, values]);
      studentsForm.resetForm();
    },
  });

  const handleTechChange = (e) => {
    const { value, checked } = e.target;

    if (checked) {
      studentsForm.setFieldValue("techs", [...studentsForm.values.techs, value]);
    } else {
      studentsForm.setFieldValue(
        "techs",
        studentsForm.values.techs.filter((tech) => tech !== value)
      );
    }
  };

  return (
    <div className="container mt-4 p-4 shadow-lg rounded" style={{ maxWidth: "700px" }}>
      <h2 className="text-center mb-4">Student Registration Form</h2>

      <form onSubmit={studentsForm.handleSubmit}>
        <div className="mb-3">
          <label className="form-label fw-bold">First Name</label>
          <input
            type="text"
            name="firstname"
            className="form-control"
            onChange={studentsForm.handleChange}
            onBlur={studentsForm.handleBlur}
            value={studentsForm.values.firstname}
          />
          {studentsForm.touched.firstname && studentsForm.errors.firstname && (
            <div className="text-danger">{studentsForm.errors.firstname}</div>
          )}
        </div>

        <div className="mb-3">
          <label className="form-label fw-bold">Last Name</label>
          <input
            type="text"
            name="lastname"
            className="form-control"
            onChange={studentsForm.handleChange}
            onBlur={studentsForm.handleBlur}
            value={studentsForm.values.lastname}
          />
          {studentsForm.touched.lastname && studentsForm.errors.lastname && (
            <div className="text-danger">{studentsForm.errors.lastname}</div>
          )}
        </div>

        <div className="mb-3">
          <label className="form-label fw-bold">Gender</label> <br />
          <div className="form-check form-check-inline">
            <input
              type="radio"
              name="gender"
              value="Male"
              className="form-check-input"
              onChange={studentsForm.handleChange}
            />
            <label className="form-check-label">Male</label>
          </div>

          <div className="form-check form-check-inline">
            <input
              type="radio"
              name="gender"
              value="Female"
              className="form-check-input"
              onChange={studentsForm.handleChange}
            />
            <label className="form-check-label">Female</label>
          </div>

          <div className="form-check form-check-inline">
            <input
              type="radio"
              name="gender"
              value="Others"
              className="form-check-input"
              onChange={studentsForm.handleChange}
            />
            <label className="form-check-label">Others</label>
          </div>
        </div>

        <div className="mb-3">
          <label className="form-label fw-bold">Age</label>
          <input
            type="text"
            name="age"
            className="form-control"
            onChange={studentsForm.handleChange}
            value={studentsForm.values.age}
          />
          {studentsForm.touched.age && studentsForm.errors.age && (
            <div className="text-danger">{studentsForm.errors.age}</div>
          )}
        </div>

        <div className="mb-3">
          <label className="form-label fw-bold">Technologies</label> <br />

          {["HTML", "CSS", "JavaScript", "NodeJS", "Angular", "ReactJS"].map((tech) => (
            <div className="form-check form-check-inline" key={tech}>
              <input
                type="checkbox"
                name="techs"
                value={tech}
                className="form-check-input"
                onChange={handleTechChange}
              />
              <label className="form-check-label">{tech}</label>
            </div>
          ))}
        </div>

        <div className="mb-3">
          <label className="form-label fw-bold">Country</label>
          <select
            name="country"
            className="form-select"
            onChange={studentsForm.handleChange}
            value={studentsForm.values.country}
          >
            <option value="">Select Country</option>
            <option value="India">India</option>
            <option value="America">America</option>
            <option value="Sweden">Sweden</option>
            <option value="UK">United Kingdom</option>
          </select>
        </div>

        <button type="submit" className="btn btn-primary me-2">
          Submit
        </button>

        <button
          type="button"
          className="btn btn-secondary"
          onClick={() => studentsForm.resetForm()}
        >
          Clear
        </button>
      </form>

      {submitData.length > 0 && (
        <div className="mt-4">
          <h4 className="text-center mb-3">Submitted Students Data</h4>

          <table className="table table-bordered table-hover text-center">
            <thead className="table-dark">
              <tr>
                <th>Firstname</th>
                <th>Lastname</th>
                <th>Gender</th>
                <th>Age</th>
                <th>Technologies</th>
                <th>Country</th>
              </tr>
            </thead>

            <tbody>
              {submitData.map((data, index) => (
                <tr key={index}>
                  <td>{data.firstname}</td>
                  <td>{data.lastname}</td>
                  <td>{data.gender}</td>
                  <td>{data.age}</td>
                  <td>{data.techs.join(", ")}</td>
                  <td>{data.country}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default StudentsForm;
