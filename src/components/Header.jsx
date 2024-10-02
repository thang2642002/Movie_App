import { useState } from "react";
import PropTypes from "prop-types";
const Header = ({ onSearch }) => {
  const [valueSerch, setValueSearch] = useState("");
  return (
    <div className="p-4 bg-black flex items-center justify-between">
      <div className="flex items-center space-x-1 md:space-x-10">
        <h1 className="text-[30px] uppercase font-bold text-red-700">Movie</h1>
        <nav className=" items-center space-x-10 hidden md:flex">
          <a href="#" className="text-white">
            Home
          </a>
          <a href="#" className="text-white">
            About
          </a>
          <a href="#" className="text-white">
            Contact
          </a>
        </nav>
      </div>
      <div className="flex items-center space-x-2 md:space-x-4">
        <input
          type="text"
          placeholder="Search"
          className="p-2 text-black"
          value={valueSerch}
          onChange={(e) => setValueSearch(e.target.value)}
        />
        <button
          className="p-2 text-white bg-red-600"
          onClick={() => onSearch(valueSerch)}
        >
          Search
        </button>
      </div>
    </div>
  );
};

Header.propTypes = {
  onSearch: PropTypes.func,
};

export default Header;
