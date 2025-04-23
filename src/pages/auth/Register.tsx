import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    // Here you can integrate with backend API
    console.log("User Registered:", { email, password });
    navigate("/login"); // Redirect to login
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form onSubmit={handleRegister} className="p-6 bg-white shadow-md rounded">
        <h2 className="text-xl font-bold mb-4">Register</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border p-2 w-full mb-2"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border p-2 w-full mb-4"
        />
        <button className="bg-green-500 text-white p-2 w-full rounded" type="submit">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
