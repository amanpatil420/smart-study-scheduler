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
      // Redirect after login
      navigate("/dashboard");
    } catch (error) {
      console.error("❌ Login error:", error.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-4">Smart Study Scheduler</h1>
      <button
        onClick={handleLogin}
        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
      >
        Sign in with Google
      </button>
    </div>
  );
}

export default Login;
