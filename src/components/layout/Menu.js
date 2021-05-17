import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from 'react-router-dom';
import Home from '../home/Home';
import Hotels from '../hotels/Hotels';
import Contact from '../contact/Contact';

function Menu() {
  return (
    <Router>
      <div className="flex items-center justify-between h-14 p-2 lg:p-4 my-2 bg-blue-100 text-blue-900 rounded-md ">
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
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/hotels" component={Hotels} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </Router>
  );
}

export default Menu;
