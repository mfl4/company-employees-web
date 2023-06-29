import { useState } from "react";
import "./LoginPage.css";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

export const LoginPage = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  // const navigate = useNavigate();
  // axios.defaults.withCredentials = true;
  // const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("aman");
    // axios
    //   .post("http://localhost:8081/login", values)
    //   .then((res) => {
    //     if (res.data.Status === "Success") {
    //       navigate("/");
    //     } else {
    //       setError(res.data.Error);
    //     }
    //   })
    //   .catch((err) => console.log(err));
  };

  return (
    <div className="login">
      <div className="login-form">
        {/* <div className="text-danger">{error && error}</div> */}
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-wrapper">
            <label htmlFor="email">
              <strong>Email</strong>
            </label>
            <input type="email" placeholder="Enter Email" name="email" onChange={(e) => setValues({ ...values, email: e.target.value })} className="form-control" autoComplete="off" />
          </div>
          <div className="form-wrapper">
            <label htmlFor="password">
              <strong>Password</strong>
            </label>
            <input type="password" placeholder="Enter Password" name="password" onChange={(e) => setValues({ ...values, password: e.target.value })} className="form-control" />
          </div>
          <button type="submit" className="btn btn-success w-100 rounded-0">
            {" "}
            Log in
          </button>
          <p>You are agree to aour terms and policies</p>
        </form>
      </div>
    </div>
  );
};
