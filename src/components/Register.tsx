import { useState } from "react";
import { registerUser } from "../services/auth";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [user, setUser] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleRegister = () => {
    registerUser(user);
    alert("Registered Successfully");
    navigate("/");
  };

  return (
    <div>
      <h2>Register</h2>
      <input placeholder="Email" onChange={(e) => setUser({ ...user, email: e.target.value })} />
      <input placeholder="Password" type="password" onChange={(e) => setUser({ ...user, password: e.target.value })} />
      <button onClick={handleRegister}>Register</button>
      <p>Already have an account? <a href="/login">Login</a></p>
    </div>
  );
}