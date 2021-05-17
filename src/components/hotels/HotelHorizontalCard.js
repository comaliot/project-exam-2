import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import HotelImage from '../../media/adam-winger-fAcloeaPA_c-unsplash.jpg';
import HotelView from '../hotels/HotelView';

function HotelHorizontalCard() {
  return (
    <>
      <div className="bg-white rounded-lg shadow overflow-hidden mb-6">
        <div className="md:flex">
          <div>
            <img
              className="h-48 w-full object-cover md:h-full md:w-96"
              src={HotelImage}
              alt="Man looking at item at a store"
            />
          </div>
          <div className="px-6 py-4">
            <div className="uppercase tracking-wide text-xs text-blue-500 font-semibold my-2 lg:my-0">
              350NOK/night
            </div>
            <Link
              to="/hotel"
              className="block mt-1 text-lg text-blue-900 leading-tight font-medium text-black hover:underline"
            >
              Hotel's name
            </Link>
            <p className="text-gray-500 text-base mt-4">
              Getting a new business off the ground is a lot of hard work. Here
              are five ideas you can use to find your first customers.
            </p>
          </div>
        </div>
      </div>

      <Router>
        <Switch>
          <Route path="/hotel" component={HotelView} />
        </Switch>
      </Router>
    </>
  );
}

export default HotelHorizontalCard;
