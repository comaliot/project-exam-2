import React, { useState, useEffect } from 'react';
import { API } from '../constants/api';
import Modal from './modal/Modal';

function HotelCard() {
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal((prev) => !prev);
  };

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
        const { id, title, address, price } = hotel;

        return (
          <div
            key={id}
            className="rounded overflow-hidden shadow mb-6 sm:max-w-sm"
          >
            <img
              className="h-80 w-full object-cover"
              src={hotel.images[0].formats.large.url}
              alt={'Sunset in the mountains'}
            />
            <div className="px-6 py-4">
              <div className="flex flex-col justify-between lg:flex-row lg:items-center">
                <div>
                  <div className="block text-lg text-blue-900 leading-tight font-medium text-black hover:underline">
                    {title}
                  </div>
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
                onClick={openModal}
                className="my-6 px-6 py-2 rounded-r-lg rounded-l-lg  text-yellow-500 font-medium uppercase border-yellow-500 border"
              >
                Book now
              </button>

              <Modal showModal={showModal} setShowModal={setShowModal} />
            </div>
          </div>
        );
      })}
    </>
  );
}

export default HotelCard;
