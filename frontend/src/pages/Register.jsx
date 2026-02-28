import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = ({ setUser }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await axios.post("/api/auth/register", form, {
        withCredentials: true,
      });
      setUser(res.data.user);
      navigate("/");
    } catch (error) {
      setError(error.response?.data?.message || "Registration Failed");
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-gray-100">
      <form className="bg-white p-6 rounded shadow-md" onSubmit={handleSubmit}>
        <h2 className="text-xl font-bold mb-4">Register</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <input
          type="text"
          placeholder="name"
          className="border p-2 w-full mb-3"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <input
          type="email"
          placeholder="email"
          className="border p-2 w-full mb-3"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <input
          type="password"
          placeholder="password"
          className="border p-2 w-full mb-3"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />
        <button type="submit" className="bg-blue-500 text-white p-2 w-full">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
