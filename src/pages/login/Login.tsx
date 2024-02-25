import { useState } from "react";
import { MdClose } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom"; // Import Link and useNavigate from react-router-dom
// import { login } from "../../api/APIService";
import { jwtDecode } from "jwt-decode";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Use the useNavigate hook to get the navigate function

  const handleLoginSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Your login logic here...
  };


    const handleCancel = () => {
      navigate("/");
    };

 const handlesubmit = () => {
   navigate("/start/");
 };
  const access_token =
    localStorage.getItem("refresh_token") !== "undefined"
      ? localStorage.getItem("refresh_token")
      : null;

  console.log(access_token && jwtDecode(access_token));

  const navigateToSignUp = () => {
    navigate("/signup"); // Use the navigate function to navigate to the signup route
  };

  return (
    <div className="modal-wrapper text-white bg-slate-700 ">
      <div className="modal-box w-[400px]">
        <div className="mb-5 shadow-md sticky top-0 bg-inherit p-4  border-inherit">
          <span
            onClick={handleCancel}
            className="close absolute top-4 right-2 cursor-pointer"
          >
            <MdClose size={25} />
          </span>
          <h1 className="text-2xl font-extrabold">Login</h1>
        </div>
        <form onSubmit={handleLoginSubmit} className="grid gap-2  p-4">
          <div className="grid gap-1 ">
            <label htmlFor="" className="form-label">
              Username
            </label>
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              className="form-input"
              required
            />
          </div>
          <div className="grid gap-1">
            <label htmlFor="" className="form-label">
              Password
            </label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              className="form-input"
              required
            />
          </div>
          <div>
            <button type="submit" onClick={handlesubmit} className="submit-btn w-full">
              Login
            </button>
            <span className="ml-2">
              Don't have an account?{" "}
              <Link
                to="/signup"
                className="text-blue-500"
                onClick={navigateToSignUp}
              >
                Sign Up
              </Link>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
