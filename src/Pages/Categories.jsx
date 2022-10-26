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
    <div>
      {categories.map((category) => (
        <div key={category._id} className="grid grid-cols-1 text-center mt-4">
          <Link to={`/category/${category._id}`}>{category.name}</Link>
        </div>
      ))}
    </div>
  );
};

export default Categories;
