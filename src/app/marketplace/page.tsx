import React from "react";
import { categories } from "../services/data";
import { CiSearch } from "react-icons/ci";

function marketplace() {
  return (
    <section className="w-full px-2 py-32 lg:px-32">
      {/* Seearchbar */}
      <div className="w-full flex justify-center py-4">
        <div className="flex bg-slate-800 items-center px-2">
          <input
            type="text"
            name=""
            id=""
            placeholder="Search..."
            className="bg-slate-800 border-none rounded-md"
          />
          <CiSearch className="text-white text-xl" />
        </div>
      </div>
      {/* end Searchbar */}
      {/* Categories */}
      <div className="flex justify-center">
        {categories.map(({ category }, index) => (
          <div
            className="text-white bg-slate-800 p-2 m-2 rounded-md"
            key={index}
          >
            <p>{category}</p>
          </div>
        ))}
      </div>
      {/* End Categories */}
    </section>
  );
}

export default marketplace;
