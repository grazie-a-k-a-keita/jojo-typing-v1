import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  //
  const navigate = useNavigate();
  const reload = () => {
    navigate("/");
    window.location.reload();
  };
  //
  return (
    <>
      <header>
        <nav className="bg-sky-700 border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
          <div
            className="flex flex-wrap justify-between items-center mx-auto"
            onClick={() => reload()}
          >
            <div className="flex items-center cursor-pointer">
              <img
                src={`${process.env.PUBLIC_URL}/images/headerIcon.png`}
                className="mr-3 h-6 sm:h-9"
                alt="Flowbite Logo"
              />
              <p className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                JOJOタイピング
              </p>
            </div>
            <p className="text-right">ver.1.0.0</p>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
