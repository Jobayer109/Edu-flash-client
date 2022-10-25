import React from "react";
import { Link } from "react-router-dom";
import Error from "../assets/error.png";

const ErrorPage = () => {
  return (
    <div className="flex items-center justify-center bg-black h-screen">
      <div>
        <img
          className="h-96 "
          src={Error}
          alt=""
        />
      </div>
      <div className="bg-black p-16 rounded-lg text-center shadow-xl">
        <h2 className="text-yellow-500 font-mono text-xl my-6">
          Uh, Looks like you got lost. <br /> Go back to homepage if you dare.
        </h2>
        <button className="btn btn-error btn-outline">
          <Link to='/'>Back to Homepage</Link>
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
