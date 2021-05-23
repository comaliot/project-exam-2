import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { API } from '../../constants/api';

function HotelCard() {
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_URL = API + '/hotels';

  useEffect(
    function () {
      async function fetchData() {
        try {
          const response = await fetch(API_URL);

          if (response.ok) {
            const json = await response.json();
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
    },
    [API_URL]
  );

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
      {hotels.map(function (hotel) {
        const { id, title, address, price } = hotel;

        return (
          <div
            key={id}
            className="rounded overflow-hidden shadow mb-6 sm:max-w-sm"
          >
            <img
              className="h-80 w-full object-cover"
              src={hotel.images[0].formats.medium.url}
              alt={'Sunset in the mountains'}
            />
            <div className="px-6 py-4">
              <div className="flex flex-col justify-between lg:flex-row lg:items-center">
                <div>
                  <Link
                    to={`/hotel/${id}`}
                    className="block text-lg text-blue-900 leading-tight font-medium hover:underline"
                  >
                    {title}
                  </Link>
                  <div className="tracking-wide text-xs font-medium text-blue-500 mt-2">
                    {address}
                  </div>
                </div>
                <div>
                  <p className="uppercase tracking-wide text-xs text-blue-500 font-semibold my-2 lg:my-0">
                    {price} NOK/night
                  </p>
                </div>
              </div>

              <p className="text-gray-500 text-base lg:mt-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>

              <button
                to={`/hotel/${id}`}
                id={id}
                className="mt-4 text-yellow-500 font-medium uppercase hover:text-yellow-600 hover:underline cursor-pointer"
              >
                Book hotel
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default HotelCard;
