import React, { useState, useEffect } from 'react';
import { API } from '../../constants/api';
import { Link } from 'react-router-dom';

function HotelHorizontalCard() {
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_URL = API + '/hotels';

  useEffect(function () {
    async function fetchData() {
      try {
        const response = await fetch(API_URL);

        if (response.ok) {
          const json = await response.json();
          console.log(json);
          setHotels(json);
        } else {
          setError('An error occured');
        }
      } catch (error) {
        setError(error.toString());
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
      {hotels.map(function (hotel) {
        return (
          <div
            key={hotel.id}
            className="mb-6 overflow-hidden bg-white rounded-lg shadow"
          >
            <div className="md:flex">
              <div className="md:h-full md:w-96">
                <img
                  className="w-full h-48 object-cover  "
                  src={hotel.images[0].formats.large.url}
                  alt="Man looking at item at a store"
                />
              </div>
              <div className="px-6 py-4">
                <div className="my-2 text-xs font-semibold tracking-wide text-blue-500 uppercase lg:my-0">
                  {hotel.price} NOK/night
                </div>
                <Link
                  to="/hotel"
                  className="block mt-1 text-lg font-medium leading-tight text-black text-blue-900 hover:underline"
                >
                  {hotel.title}
                </Link>
                <div className="tracking-wide text-xs font-medium text-blue-500 mt-2">
                  {hotel.address}
                </div>
                <p className="mt-4 text-base text-gray-500">
                  Getting a new business off the ground is a lot of hard work.
                  Here are five ideas you can use to find your first customers.
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default HotelHorizontalCard;
