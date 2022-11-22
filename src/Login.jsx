import React, { useState } from "react";
import axios from "axios";
import { login } from "./service/userSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("hzz@gmail.com");
  const [password, setPassword] = useState("123123");
  const dispatch = useDispatch();
  const nav = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    apiRegister();
  };
  const apiRegister = async () => {
    const { data } = await axios.post(
      "http://go.contact.mmeducare.com/api/v1/login",
      { email, password }
    );
    console.log(data);
    dispatch(login(data));
    if (data?.success) {
      nav("/dashboard");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="col-6">
      <h1>Login account</h1>
      <input
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        className="form-control my-5"
        type="email"
        placeholder="email"
      />
      <input
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        className="form-control my-5"
        type="password"
        placeholder="password"
      />

      <button type="submit" className="btn btn-success">
        Login
      </button>
    </form>
  );
};

export default Login;
