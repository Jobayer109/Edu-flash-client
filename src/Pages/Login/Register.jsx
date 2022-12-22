import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider";

const Register = () => {
  const { createUser, profile } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const imgUrl = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, imgUrl, email, password);

    createUser(email, password)
      .then((result) => {
        profile(name, imgUrl);
        navigate("/login");
        form.reset("");
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div>
      <div className="p-4 w-full max-w-sm bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 md:p-8  mx-auto mt-8 mb-20">
        <form onSubmit={handleSubmit} className="space-y-6">
          <h5 className="text-xl font-medium text-gray-900 ">Register</h5>
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-900 ">Your name</label>
            <input
              type="text"
              name="name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              placeholder="name"
              required
            />
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-900 ">Your photo url</label>
            <input
              type="photoURL"
              name="photoURL"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              placeholder="photoURL"
            />
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-900 ">Your email</label>
            <input
              type="email"
              name="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              placeholder="email"
              required
            />
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-900 ">Your password</label>
            <input
              type="password"
              name="password"
              placeholder="••••••••"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              required
            />
          </div>
          <div className="flex items-start">
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  type="checkbox"
                  value=""
                  className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300  "
                />
              </div>
              <label className="ml-2 text-sm font-medium text-gray-900 ">
                Accept terms and conditions
              </label>
            </div>
          </div>
          <button
            type="submit"
            className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
          >
            Register
          </button>
          <div className="text-sm font-medium text-gray-500 ">
            Already have an account?
            <Link to="/login" className="text-blue-700 hover:underline ">
              Sign in
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
