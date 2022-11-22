import React, { useState } from "react";
import axios from 'axios'

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [comfirmPass, setComfirmPass] = useState("");
  const [photo, setPhoto] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, password, comfirmPass, photo);
     apiRegister()
  };

  const apiRegister = async () => {
    const formData = new FormData();

    formData.append('name', name);
    formData.append('email', email);
    formData.append('password', password);
    formData.append('password_confirmation', comfirmPass);
    formData.append('photo', photo);

    const { data } = await axios.post(
      'http://go.contact.mmeducare.com/api/v1/register',
      formData
    )
    console.log(data)

  }

  return (
    <form className="col-6" onSubmit={handleSubmit}>
      <h1>Register account</h1>
      <input
        onChange={(e) => setName(e.target.value)}
        value={name}
        className="form-control my-5"
        type="text"
        placeholder="name"
      />
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
      <input
        onChange={(e) => setComfirmPass(e.target.value)}
        value={comfirmPass}
        className="form-control my-5"
        type="password"
        placeholder="password comfirmation"
      />
      <input
        onChange={(e) => setPhoto(e.target.files[0])}
        // value={photo}
        className="form-control my-5"
        type="file"
      />

      <button type="submit" className="btn btn-success">
        register
      </button>
    </form>
  );
};

export default Register;
