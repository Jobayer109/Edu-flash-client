import React from "react";
import { useLoaderData } from "react-router-dom";
import Course from "./Course";

const Courses = () => {
  const courses = useLoaderData();
  return (
    <div>
      <div className="lg:grid grid-cols-2 gap-10 sm:w-[70%] sm:mx-auto my-16">
        {courses.map((course) => (
          <Course key={course.id} course={course}></Course>
        ))}
      </div>
    </div>
  );
};

export default Courses;
