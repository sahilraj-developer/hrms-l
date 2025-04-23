import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../auth/AuthProvider";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login }:any = useAuth();
  const navigate = useNavigate();

  const handleLogin = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    login({ email }); // Simulate authentication
    navigate("/client"); // Redirect after login
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form onSubmit={handleLogin} className="p-6 bg-white shadow-md rounded">
        <h2 className="text-xl font-bold mb-4">Login</h2>
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
        <button className="bg-blue-500 text-white p-2 w-full rounded" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
