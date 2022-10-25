import React from "react";
import { Link } from "react-router-dom";

const Course = ({ course }) => {
  console.log(course);
  const { id, course_name, comment, rating, fee, img } = course;
  return (
    <div>
      <div className="card lg:card-side bg-gray-100 shadow-xl border motion-safe:hover:scale-110 ">
        <figure>
          <img
            className="h-38 w-32 border border-gray-300 p-1 rounded-lg ml-6 "
            src={img}
            alt="Album"
          />
        </figure>
        <div className="card-body ">
          <div className="text-center">
            <h2 className="card-title text-center">{course_name}</h2>
            <p>
              Course Fee: $ <span>{fee}</span>
            </p>
            <p>{rating}</p>
            <p>{comment}</p>
          </div>

          <div className="card-actions">
            <Link to={`/course/${id}`}>
              <button className="btn btn-sm btn-outline">See Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;
