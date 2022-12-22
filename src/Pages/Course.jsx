import React from "react";
import { FaStar, FaThumbsUp } from "react-icons/fa";
import { Link } from "react-router-dom";

const Course = ({ course }) => {
  const { id, course_name, comment, rating, fee, img } = course;
  return (
    <div>
      <div className="card sm:card-side md:card-side lg:card-side  shadow-xl">
        <figure>
          <img
            src={img}
            alt="Album"
            className="h-38 w-32 object-contain border border-gray-300 p-1 rounded-lg sm:ml-6 md:ml-6 lg:ml-6"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{course_name}</h2>
          <p className="font-semibold">
            Course Fee: <span className="font-normal">$ {fee}</span>
          </p>
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-between">
              <FaStar className="mr-2" />
              <p>{rating}</p>
            </div>
            <div className="flex items-center justify-between">
              <FaThumbsUp className="mr-2" />
              <p>{comment}</p>
            </div>
          </div>
          <div className="card-actions justify-start  ">
            <Link to={`/course/${id}`}>
              <button className="w-24 py-1 px-1 bg-orange-600 text-white text-sm rounded-md  mt-4">
                See Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;
