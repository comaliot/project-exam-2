import React from 'react';
import {
  ShieldIcon,
  DollarIcon,
  UserCheckIcon,
  BuildingIcon,
} from '@iconicicons/react';

function Benefits() {
  return (
    <div className="grid grid-cols-2 my-8">
      <div className="flex flex-col md:flex-row items-center md:mb-6">
        <div className="flex justify-center items-center w-20 h-20 bg-blue-100 rounded-lg text-blue-500 shadow-inner">
          <ShieldIcon />
        </div>
        <div className="my-4 sm:ml-4 md:my-0">
          <h4 className="font-medium text-center text-blue-500 md:text-left">
            Secure payments
          </h4>
          <p className="text-gray-500 text-center md:text-left">
            Effective payments encryption
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center md:mb-6">
        <div className="flex justify-center items-center w-20 h-20 bg-yellow-100 rounded-lg text-yellow-500 shadow-inner">
          <DollarIcon />
        </div>
        <div className="my-4 sm:ml-4 md:my-0">
          <h4 className="font-medium text-center text-yellow-500 md:text-left">
            Cheapest prices
          </h4>
          <p className="text-gray-500 text-center md:text-left">
            Find your ideal hotel for the cheapest price
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center">
        <div className="flex justify-center items-center w-20 h-20 bg-red-200 rounded-lg text-red-500 shadow-inner">
          <UserCheckIcon />
        </div>
        <div className="my-4 sm:ml-4 md:my-0 text-red-500">
          <h4 className="font-medium text-center md:text-left">
            Satisfied customers
          </h4>
          <p className="text-gray-500 text-center md:text-left">
            Over 2000 positive ratings
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center">
        <div className="flex justify-center items-center w-20 h-20 bg-green-100 rounded-lg text-green-500 shadow-inner">
          <BuildingIcon />
        </div>
        <div className="my-4 sm:ml-4 md:my-0">
          <h4 className="font-medium text-center md:text-left text-green-500">
            Best hotels
          </h4>
          <p className="text-gray-500 text-center md:text-left">
            Only best, time proved hotels in Bergen
          </p>
        </div>
      </div>
    </div>
  );
}

export default Benefits;
