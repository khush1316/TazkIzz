import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import axios from "axios";

const Register = () => {
  //This is used to navigate purpose if you want to navigate from one page to another we can use useNavigate() hook.
  const navigate = useNavigate();

  const [Values, setValues] = useState({
    username: "",
    email: "",
    password: "",
  });

  // const change = (e) => {
  //   const { name, value } = e.target;
  //   setValues({ ...Values, [name]: value });
  // };
  // console.log(Values);

  const changeUsername = (e) => {
    const username = e.target.value;
    setValues({ ...Values, username });
  };

  const changeEmail = (e) => {
    const email = e.target.value;
    setValues({ ...Values, email });
  };

  const changePassword = (e) => {
    const password = e.target.value;
    setValues({ ...Values, password });
  };

  // console.log(Values);
  //This block is important as this is used to store the data taking from the frontend and storing it to the backend
  const register = async (e) => {
    //e.preventDefault();is used to stop the default action of something.
    // For example:
    // When you submit a form in HTML, it automatically reloads the page.
    // If you don’t want that to happen (like in React), you use:
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:1000/api/v1/register",
        Values
      );
      alert(res.data.success);
      navigate("/login");
    } catch (error) {
      alert(error.response.data.error);
    }
  };

  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <div className="w-[60vw] md:w-[50vw] lg:w-[30vw]">
        <h1 className="text-3xl font-bold text-center text-blue-700">
          TazkIzz
        </h1>
        <h3 className="text-center font-semibold  mt-3">
          Register with TazkIzz
        </h3>
      </div>
      <div className="w-[60vw] md:w-[50vw] lg:w-[30vw] mt-4">
        <form className="flex flex-col gap-4">
          <input
            type="text"
            required
            placeholder="username"
            className="border rounded px-4 py-1 border-zinc-400 outline-none"
            name="username"
            value={Values.username}
            // onChange={change}
            onChange={changeUsername}
          />
          <input
            type="email"
            required
            placeholder="email"
            className="border rounded px-4 py-1 border-zinc-400 outline-none"
            name="email"
            value={Values.email}
            // onChange={change}
            onChange={changeEmail}
          />
          <input
            type="password"
            required
            placeholder="password"
            className="border rounded px-4 py-1 border-zinc-400 outline-none"
            name="password"
            value={Values.password}
            // onChange={change}
            onChange={changePassword}
          />
          <button
            className="bg-blue-800 text-white font-semibold border py-2 rounded hover:transition-all duration-300"
            onClick={register}
          >
            Register
          </button>
          <p className="text-center font-semibold text-gray-900">
            Already have an account ?{" "}
            <Link to={"/login"} className="text-blue-500">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
