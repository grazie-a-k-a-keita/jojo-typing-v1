import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header>
        <nav className="bg-sky-700 border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
          <div className="flex flex-wrap justify-between items-center mx-auto">
            <Link to="/" className="flex items-center">
              <img
                src={`${process.env.PUBLIC_URL}/images/headerIcon.png`}
                className="mr-3 h-6 sm:h-9"
                alt="Flowbite Logo"
              />
              <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                JOJOタイピング
              </span>
            </Link>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
