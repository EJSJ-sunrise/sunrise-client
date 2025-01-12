import React from "react";

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 w-full h-16 flex justify-between items-center px-6 bg-white border-b border-gray-200 shadow-md z-10">
      <img src="/Common/headerlogo.svg" alt="Header Logo" className="h-10" />

      <img
        src="/Common/menuicon.svg"
        alt="Menu Icon"
        className="h-8 cursor-pointer"
      />
    </header>
  );
};

export default Header;
