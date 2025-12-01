import React from "react";
import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <div
      className="container my-5 p-4 rounded-4 shadow"
      style={{
        background: "linear-gradient(to right, #fdf6f0, #f7e8ff)", 
        minHeight: "100vh",
      }}
    >
      <header className="text-center mb-5">
        <h1 className="fw-bold text-purple" style={{ color: "#6a0dad" }}>
           React Routing Components
        </h1>
        
      </header>

      <nav className="mb-5">
        <ul className="nav flex-column flex-md-row justify-content-center gap-3 list-unstyled">
          {[
            { path: "/counter", name: "Counter" },
            { path: "/todolist", name: "TodoList" },
            { path: "/table", name: "StudentsTable" },
            { path: "/studentform", name: "StudentForm" },
            { path: "/recipe", name: "RecipeMaster" },
          ].map((item) => (
            <li key={item.path} className="nav-item">
              <Link
                to={item.path}
                className="nav-link text-center px-4 py-3 rounded-4 shadow-lg fw-semibold"
                style={{
                  background: "white",
                  color: "#6a0dad",
                  transition: "0.3s",
                  minWidth: "130px",
                }}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <main
        className="p-5 rounded-4 shadow"
        style={{ backgroundColor: "rgba(255,255,255,0.9)" }}
      >
        <Outlet />
      </main>

      <footer
        className="text-center mt-5 p-3 rounded-4"
        style={{ background: "rgba(255,255,255,0.7)", color: "#6a0dad" }}
      >
        <small>© 2025 My Elegant React App | Styled with Bootstrap & Pastels</small>
      </footer>
    </div>
  );
}

export default App;
