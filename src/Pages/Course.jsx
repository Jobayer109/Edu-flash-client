import React from "react";
import { FaStar, FaThumbsUp } from "react-icons/fa";
import { Link } from "react-router-dom";

const Course = ({ course }) => {
  const { id, course_name, comment, rating, fee, img } = course;
  return (
    <div>
      <div className="card lg:card-side hover:bg-gray-200 shadow-xl border transition delay-50 duration-300 ease-in h-52 w-96">
        <figure>
          <img
            className="h-38 w-32 border border-gray-300 p-1 rounded-lg ml-6"
            src={img}
            alt=""
          />
        </figure>
        <div className="card-body ">
          <div className="">
            <h2 className="card-title text-center text-2xl font-mono">{course_name}</h2>
            <div className="my-2">
              <p className=" font-mono">
                Course Fee: $<span className="text-orange-500 font-bold">{fee}</span>
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <FaStar />
                  <p className="ml-2">{rating}</p>
                </div>
                <div className="flex items-center">
                  <FaThumbsUp />
                  <p className="ml-2">{comment}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="card-actions">
            <Link to={`/course/${id}`}>
              <button className="btn btn-sm btn-outline btn-black font-mono">See Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;
