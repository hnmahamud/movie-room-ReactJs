import React from 'react';

const Header = () => {
  return (
    <div className="navbar bg-gray-500 text-white">
      <div className="w-[85%] mx-auto">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">Movie</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li><a>Item 1</a></li>
            <li><a>Item 2</a></li>
            <li><a>Item 3</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
