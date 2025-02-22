import React, { useRef } from "react";
import "../css/login.css";

const Login = () => {
  const student = useRef(null);
  const staff = useRef(null);
  const studentBtn = useRef(null);
  const staffBtn = useRef(null);
  function studentForm() {
    student.current.style.display = "flex";
    staff.current.style.display = "none";
    studentBtn.current.classList.add("active");
    staffBtn.current.classList.remove("active");
  }
  function staffForm() {
    student.current.style.display = "none";
    staff.current.style.display = "flex";
    staffBtn.current.classList.add("active");
    studentBtn.current.classList.remove("active");
  }
  return (
    <div className="login-container">
      <div className="login-form">
        <h1>Login</h1>
        <div className="user">
          <button ref={staffBtn} className="active" onClick={staffForm}>
            Staff
          </button>
          <button ref={studentBtn} onClick={studentForm}>
            Student
          </button>
        </div>
        <form>
          <div ref={staff} className="staff">
            <div className="name">
              <label>Name:</label>
              <input type="text" placeholder="Enter User Name" required />
            </div>
            <div className="pass">
              <label>Password:</label>
              <input type="password" placeholder="Enter Password" required />
            </div>
          </div>
          <div ref={student} className="student">
            <div className="name">
              <label>Roll No:</label>
              <input type="text" placeholder="Enter Student Roll No" required />
            </div>
            <div className="pass">
              <label>Password:</label>
              <input type="password" placeholder="Enter Password" required />
            </div>
          </div>

          <button
            type="submit"
            onClick={() => {
              formSubmit(event);
            }}
          >
            Login
          </button>

          <p>
            Don't Have an Account? <a href="">Click Here</a>
          </p>
          <p>
            Forget Your Password? <a href="">Click Here</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
