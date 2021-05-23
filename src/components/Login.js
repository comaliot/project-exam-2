import React from 'react';
import Footer from '../components/layout/Footer';
import { loginValidation } from './loginValidation';

function Login() {
  loginValidation();

  return (
    <>
      <div className="w-full mt-14 mb-6 lg:my-20 lg:mb-6">
        <h1 className="text-4xl text-blue-900 leading-tight">
          Login to admin page
        </h1>
      </div>

      <div className="flex flex-col sm:flex-row sm:justify-between">
        <div>
          <form id="form" className="w-full max-w-lg">
            <div className="message-container"></div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="username"
              >
                Username
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline username"
                id="username"
                type="text"
                placeholder="username"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight "
                id="password"
                type="password"
                placeholder="password"
              />
            </div>

            <button
              className="my-6 px-6 py-2 rounded-r-lg rounded-l-lg bg-yellow-400 text-gray-50 font-medium uppercase border-yellow-500 border"
              type="submit"
            >
              Send
            </button>
          </form>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Login;
