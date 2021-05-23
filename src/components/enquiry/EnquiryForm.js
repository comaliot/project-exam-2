import React from 'react';
import DateRangePicker from './DateRangePicker';

function EnquiryForm() {
  return (
    <>
      <div className="w-full mt-4">
        <form className="bg-gray-50 shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="firstName"
            >
              First name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="firstName"
              type="text"
              placeholder="First name"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="last_name"
            >
              Last name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight "
              id="last_name"
              type="text"
              placeholder="Last name"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight "
              id="email"
              type="email"
              placeholder="Email"
            />
          </div>
          <div className="w-full mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="number_of_people"
            >
              Number of people
            </label>
            <div className="relative">
              <select
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
                id="grid-state"
              >
                <option value="">Select amount of people</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5+">5 or more</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="w-full mb-4">
            <DateRangePicker />
          </div>

          <button className="mt-4 px-6 py-2 rounded-r-lg rounded-l-lg  text-yellow-500 font-medium uppercase border-yellow-500 border">
            Book
          </button>
        </form>
      </div>
    </>
  );
}

export default EnquiryForm;
