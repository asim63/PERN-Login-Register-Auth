import React from "react";
import { Link } from "react-router-dom";

const Home = ({ user, error }) => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg text-center">
        {user ? (
          <div>
            <h3 className="text-2xl font-bold mb-4 text-gray-800">
              Welcome, {user?.name || "Guest"}!
            </h3>
            <p className="text-gray-600">Email: {user.email}</p>
          </div>
        ) : (
          <div>
            <h3 className="text-xl font-semibold mb-6 text-gray-700">
              Please Login or Register
            </h3>
            <div className="flex flex-col gap-y-4">
              <Link
                to="/login"
                className="w-full text-white bg-blue-500 p-3 rounded-md hover:underline font-medium"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="w-full text-white bg-gray-500 p-3 rounded-md hover:underline font-medium"
              >
                Register
              </Link>
            </div>
          </div>
        )}
      </div>
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
};

export default Home;
