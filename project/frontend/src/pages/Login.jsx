import React from "react";
import { Form, Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const Login = () => {
  const [Values, setValues] = useState({
    email: "",
    password: "",
  });

  const change = (e) => {
    const { name, value } = e.target;
    setValues({ ...Values, [name]: value });
  };
  console.log(Values);

  // const changeUsername = (e) => {
  //   const username = e.target.value;
  //   setValues({ ...Values, username });
  // };

  // const changeEmail = (e) => {
  //   const email = e.target.value;
  //   setValues({ ...Values, email });
  // };

  // const changePassword = (e) => {
  //   const password = e.target.value;
  //   setValues({ ...Values, password });
  // };

  // console.log(Values);

  const login = async () => {
    try {
      await axios.post("http://localhost:1000/api/v1/register", Values);
      alert(response.data.success);
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
          Sign Up with TazkIzz
        </h3>
      </div>
      <div className="w-[60vw] md:w-[50vw] lg:w-[30vw] mt-4">
        <form className="flex flex-col gap-4">
          <input
            type="email"
            required
            placeholder="email"
            className="border rounded px-4 py-1 border-zinc-400 outline-none"
            name="email"
            value={Values.email}
            onChange={change}
            // onChange={changeEmail}
          />
          <input
            type="password"
            required
            placeholder="password"
            className="border rounded px-4 py-1 border-zinc-400 outline-none"
            name="password"
            value={Values.password}
            onChange={change}
            // onChange={changePassword}
          />
          <button
            className="bg-blue-800 text-white font-semibold border py-2 rounded hover:transition-all duration-300"
            onClick={login}
          >
            Login
          </button>
          <p className="text-center font-semibold text-gray-900">
            Don't have an account ?{" "}
            <Link to={"/register"} className="text-blue-500">
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
