import React from "react";
import { navigation } from "../services/data";
import Link from "next/link";

const FooterLayout = () => {
  return (
    <footer>
      <div className="flex flex-col text-white text-center py-4">
        <h2 className="text-[40px]">URUZ</h2>
        <p className="text-[30px]">Software Solutions</p>
      </div>
      <div className="flex flex-col md:flex-row py-12 m-auto max-w-[400px] md:w-full">
        {navigation.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="text-sm font-semibold leading-6 text-white m-auto py-2"
          >
            {item.name}
          </Link>
        ))}
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center">
        <div className="px-4">
          <input
            type="text"
            placeholder="Enter your email"
            className="bg-slate-800 rounded-l-lg border-none px-3.5 py-2.5 text-sm font-semibold"
          />
          <a
            href="#"
            className="rounded-r-lg bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Subscribe
          </a>
        </div>
        <div className="px-4">
          <p className="text-white py-3">
            2024 URUZ Solutions. All right reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterLayout;
