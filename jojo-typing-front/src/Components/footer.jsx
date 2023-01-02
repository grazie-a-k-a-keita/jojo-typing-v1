import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="absolute inset-x-0 bottom-0 h-16">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400 mx-auto">
          <div className="flex flex-col">
            <p className="mx-auto">ご利用規約・プライバシーポリシー</p>
            <p className="mx-auto">©2022 grazie.</p>
          </div>
        </span>
      </footer>
    </>
  );
};

export default Footer;
