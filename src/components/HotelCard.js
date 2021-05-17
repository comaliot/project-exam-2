import React from 'react';
import HotelImage from '../media/adam-winger-fAcloeaPA_c-unsplash.jpg';

function HotelCard() {
  return (
    <>
      <div className="rounded overflow-hidden shadow mb-6 sm:max-w-sm">
        <img
          className="w-full"
          src={HotelImage}
          alt="Sunset in the mountains"
        />
        <div className="px-6 py-4">
          <div className="flex flex-col justify-between lg:flex-row lg:items-center">
            <div className="block text-lg text-blue-900 leading-tight font-medium text-black hover:underline">
              The Coldest Sunset
            </div>
            <div>
              <p className="uppercase tracking-wide text-xs text-blue-500 font-semibold my-2 lg:my-0">
                350NOK/night
              </p>
            </div>
          </div>

          <p className="text-gray-500 text-base lg:mt-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, nulla! Maiores et perferendis eaque,
            exercitationem praesentium nihil.
          </p>
        </div>

        <button className="ml-6 mb-6 px-6 py-2 rounded-r-lg rounded-l-lg bg-yellow-400 text-gray-50 font-medium uppercase border-yellow-500 border">
          Book now
        </button>
      </div>
    </>
  );
}

export default HotelCard;
