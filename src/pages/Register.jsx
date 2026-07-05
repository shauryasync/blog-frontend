import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../services/api";

const Register = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      await api.post("/users/register", {
        name,
        email,
        password,
      });

      alert("Registration Successful!");

      navigate("/login");
    } catch (error) {
      alert(error.response?.data?.message || "Registration Failed");
    }
  };

  return (
    <div className="min-h-[80vh] flex justify-center items-center px-6">
      <form
        onSubmit={handleRegister}
        className="bg-slate-900 border border-slate-800 rounded-xl p-8 w-full max-w-md"
      >
        <h1 className="text-3xl font-bold mb-6 text-center">Register</h1>

        <input
          type="text"
          placeholder="Full Name"
          className="w-full p-3 mb-4 rounded-lg bg-slate-800 outline-none"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 mb-4 rounded-lg bg-slate-800 outline-none"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 mb-6 rounded-lg bg-slate-800 outline-none"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="w-full bg-purple-600 hover:bg-purple-700 p-3 rounded-lg font-medium">
          Register
        </button>

        <p className="text-center text-slate-400 mt-5">
          Already have an account?{" "}
          <Link to="/login" className="text-purple-400">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
