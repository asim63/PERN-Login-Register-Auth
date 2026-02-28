import React from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Navbar = ({ user, setUser }) => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await axios.post(
        "/api/auth/logout",
        {},
        {
          withCredentials: true,
        },
      );
    } catch (error) {
      console.error("Logout failed", error);
    } finally {
      setUser(null);
      navigate("/");
    }
  };

  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <Link to="/" className="font-bold">
        PERN Auth
      </Link>
      <div>
        {user ? (
          <div className="flex items-center space-x-4">
            <span>Welcome, {user.name}</span>
            <button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            >
              Logout
            </button>
          </div>
        ) : (
          <div className="flex space-x-4">
            <Link to="/login" className="hover:text-gray-300">
              Login
            </Link>
            <Link to="/register" className="hover:text-gray-300">
              Register
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
