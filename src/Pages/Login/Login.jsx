import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import React, { useContext, useEffect } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { AuthContext } from "../../Contexts/AuthProvider";
import app from "../../firebase/firebase.config";

const Login = () => {
  const { user, logIn, googleSignIn, githubSignIn, resetPassword } = useContext(AuthContext);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    logIn(email, password)
      .then((result) => {
        form.reset("");
        console.log(result.user);
      })
      .catch((error) => {
        swal(error.message);
      });
    
   
  };

  //Google sign in
  const handleGoogleSignIn = () => {
    googleSignIn(googleProvider)
      .then((result) => {})
      .catch((error) => {});
  };

  //Github sign in
  const handleGithubSignIn = () => {
    githubSignIn(githubProvider)
      .then((result) => {})
      .catch((error) => {});
  };

   useEffect(() => {
     if (user) {
       navigate(from, { replace: true });
     }
   }, [user, navigate, from]);

//Password reset.
  const handleResetPassword = (email) => {
    resetPassword(email)
      .then(result => { console.log(result.user);})
    .catch(error => {console.log(error.message);})
  }


  return (
    <div>
      <div className="p-4 w-full max-w-sm bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto mt-8 mb-20">
        <form onSubmit={handleSubmit} className="space-y-6">
          <h5 className="text-xl font-medium text-gray-900 dark:text-white">
            Sign in to our platform
          </h5>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              Your email
            </label>
            <input
              type="email"
              name="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="email"
              required=""
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              Your password
            </label>
            <input
              type="password"
              name="password"
              placeholder="••••••••"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              required=""
            />
          </div>
          <div className="flex items-start">
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="remember"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                  required=""
                />
              </div>
              <label
                for="remember"
                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Remember me
              </label>
            </div>
            <Link
              onClick={handleResetPassword}
              to="/"
              className="ml-auto text-sm text-blue-700 hover:underline dark:text-blue-500"
            >
              Forget Password?
            </Link>
          </div>
          <button
            type="submit"
            className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Sign in
          </button>
          <div className="flex items-center justify-center">
            <FaGoogle onClick={handleGoogleSignIn} className="text-3xl text-blue-900 mr-3" />
            <FaGithub onClick={handleGithubSignIn} className="text-3xl" />
          </div>
          <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
            Not registered?{" "}
            <Link to="/register" className="text-blue-700 hover:underline dark:text-blue-500">
              Create account
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
