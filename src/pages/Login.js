import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { EMPLOYEE_DASHBOARD } from "../constants/routes";
import { BASE_URL } from "../constants/urls";

const Login = () => {
  const [user, setUser] = useState();

  const submit = (e) => {
    e.preventDefault();
    fetch(`${BASE_URL}/accounts/login/`, {
      method: "POST",
      body: JSON.stringify({ user }),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((json) => setUser(json.user));
  };

  return (
    <div className="flex flex-col justify-center items-center w-full min-h-screen">
      <div class="p-4 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700">
        <form class="space-y-6" action="#">
          <h5 class="text-xl font-medium text-gray-800 dark:text-white">
            Sign in to our platform
          </h5>
          <div>
            <label
              for="email"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Your email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              class="bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="name@company.com"
              required=""
            />
          </div>
          <div>
            <label
              for="password"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Your password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="••••••••"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pt-2.5  dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              required=""
            />
          </div>
          <div class="">
            <a
              href="#"
              class="ml-auto text-sm text-blue-700 hover:underline dark:text-blue-500"
            >
              Lost Password?
            </a>
          </div>
          <div class="flex items-start">
            <div class="flex items-start py-3">
              <div class="flex items-center h-5 ">
                <input
                  id="remember"
                  type="checkbox"
                  value=""
                  class="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                  required=""
                />
              </div>
              <div class=" justify-items-center">
                <label
                  for="remember"
                  class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 "
                >
                  Remember me
                </label>
              </div>
            </div>
          </div>
          <Link to="/employee-dashboard">
            <button
              type="submit"
              class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Login to your account
            </button>
          </Link>

          <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
            Not registered?{" "}
            <a
              href="#"
              class="text-blue-700 hover:underline dark:text-blue-500"
            >
              Create account
            </a>
          </div>
          <div>
            <button
              type="button"
              class="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2"
            >
              <svg
                class="w-4 h-4 mr-2 -ml-1"
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="google"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 488 512"
              >
                <path
                  fill="currentColor"
                  d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
                ></path>
              </svg>
              Sign in with Google
            </button>
          </div>
        </form>
      </div>
    </div>

    //   <div class="grid place-items-center h-screen p-10">
    //   <div class="w-full max-w-xs">
    //     <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
    //       <div class="mb-4">
    //         <label
    //           class="block text-gray-700 text-sm font-bold mb-2"
    //           for="username"
    //         >
    //           Username
    //         </label>
    //         <input
    //           class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    //           id="username"
    //           type="text"
    //           placeholder="Username"
    //         />
    //       </div>
    //       <div class="mb-6">
    //         <label
    //           class="block text-gray-700 text-sm font-bold mb-2"
    //           for="password"
    //         >
    //           Password
    //         </label>
    //         <input
    //           class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
    //           id="password"
    //           type="password"
    //           placeholder="******************"
    //         />
    //         <p class="text-red-500 text-xs italic">Please choose a password.</p>
    //       </div>
    //       <div class="flex items-center justify-between">
    //         {/* <button
    //           class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
    //           type="button"
    //         >
    //           Sign In
    //         </button> */}
    //         <Link to={EMPLOYEE_DASHBOARD}>
    //         <button
    //           class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
    //           type="button"
    //         >
    //           Sign In
    //         </button>
    //           </Link>
    //         <a
    //           class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
    //           href="#"
    //         >
    //           Forgot Password?
    //         </a>
    //       </div>
    //     </form>
    //   </div>
    // </div>
  );
};

export default Login;
