import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header>
        <nav class="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
          <div class="flex flex-wrap justify-between items-center mx-auto">
            <Link to="/" class="flex items-center">
              <img
                src={`${process.env.PUBLIC_URL}/images/headerIcon.png`}
                class="mr-3 h-6 sm:h-9"
                alt="Flowbite Logo"
              />
              <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
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
