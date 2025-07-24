import React from "react";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase/config";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log("✅ Logged in as:", user.displayName);
      navigate("/dashboard");
    } catch (error) {
      console.error("❌ Login error:", error.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-50 px-4">
      <h1 className="text-4xl font-bold mb-6 text-blue-700">Smart Study Scheduler</h1>
      <p className="mb-4 text-gray-600">Organize your studies efficiently!</p>
      <button
        onClick={handleLogin}
        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow-md"
      >
        Sign in with Google
      </button>
    </div>
  );
}

export default Login;
