import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex items-center justify-center ">
      <div>
        <img
          className="h-96 mt-36"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgOxGZpJRcNKmyf1ESGZgVRd4sj4OQMxLPpg&usqp=CAU"
          alt=""
        />
      </div>
      <div className="bg-black p-24 mt-28 rounded-lg text-center shadow-xl">
        <h2 className="text-yellow-500 my-6">
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
