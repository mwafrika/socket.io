import { useState } from "react";

const Register = () => {
  // username email password confirm password
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { username, email, password, confirmPassword } = user;
  const onChange = (e) => {
    setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("Register submit", user);
  };

  return (
    <div className="h-screen flex justify-center items-center bg-gray-50 dark:bg-gray-900">
      <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6 w-full sm:w-96">
        <h2 className="text-3xl font-semibold text-center text-gray-700 dark:text-white">
          Register
        </h2>
        <form onSubmit={onSubmit}>
          <div className="mt-4">
            <label
              className="block text-gray-700 dark:text-gray-200 text-sm font-medium mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <input
              className="w-full px-3 py-2 text-gray-700 dark:text-gray-300 bg-gray-200 dark:bg-gray-700 rounded-lg focus:outline-none focus:bg-white focus:outline border-2 border-gray-200"
              type="text"
              name="username"
              id="username"
              value={username}
              onChange={onChange}
              required
            />
          </div>
          <div className="mt-4">
            <label
              className="block text-gray-700 dark:text-gray-200 text-sm font-medium mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="w-full px-3 py-2 text-gray-700 dark:text-gray-300 bg-gray-200 dark:bg-gray-700 rounded-lg focus:outline-none focus:bg-white focus:outline border-2 border-gray-200"
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={onChange}
              required
            />
          </div>
          <div className="mt-4">
            <label
              className="block text-gray-700 dark:text-gray-200 text-sm font-medium mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="w-full px-3 py-2 text-gray-700 dark:text-gray-300 bg-gray-200 dark:bg-gray-700 rounded-lg focus:outline-none focus:bg-white focus:outline border-2 border-gray-200"
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={onChange}
              required
            />
          </div>
          <div className="mt-4">
            <label
              className="block text-gray-700 dark:text-gray-200 text-sm font-medium mb-2"
              htmlFor="confirmPassword"
            >
              Confirm Password
            </label>
            <input
              className="w-full px-3 py-2 text-gray-700 dark:text-gray-300 bg-gray-200 dark:bg-gray-700 rounded-lg focus:outline-none focus:bg-white focus:outline border-2 border-gray-200"
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              value={confirmPassword}
              onChange={onChange}
              required
            />
          </div>
          <div className="mt-6">
            <button className="w-full px-3 py-4 text-white bg-indigo-500 rounded-md focus:bg-indigo-600 focus:outline-none">
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
