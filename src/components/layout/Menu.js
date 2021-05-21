import React from 'react';
import { NavLink } from 'react-router-dom';

function Menu() {
  return (
    <div className="flex items-center justify-between p-2 my-2 text-blue-900 bg-blue-100 rounded-md h-14 lg:p-4 ">
      <div className="text-2xl font-bold">
        <NavLink to="/" exact className="p-2">
          Holidaze
        </NavLink>
      </div>
      <div>
        <NavLink to="/hotels" className="p-2 hover:bg-blue-200">
          Hotels
        </NavLink>
        <NavLink to="/contact" className="p-2 hover:bg-blue-200">
          Contact
        </NavLink>
      </div>
    </div>
  );
}

export default Menu;
