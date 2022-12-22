import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/courseCategories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div className="border-2 mx-12 bg-gray-700 py-4 pt-16 text-white h-screen rounded-xl sticky top-0 shadow-lg">
      {categories.map((category) => (
        <div
          key={category._id}
          className="my-4 px-12 text-center hover:bg-orange-600 py-2 font-mono w-full "
        >
          <Link to={`/category/${category._id}`}>{category.name}</Link>
        </div>
      ))}
    </div>
  );
};

export default Categories;
