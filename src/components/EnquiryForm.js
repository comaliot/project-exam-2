import React from 'react';

function EnquiryForm() {
  return (
    <>
      <div className="w-full max-w-xs">
        <form className="bg-gray-50 shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              for="first_name"
            >
              First name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="First name"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              for="last_name"
            >
              Last name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight "
              id="last_name"
              type="text"
              placeholder="Last name"
            />
          </div>
          <div className="w-full mb-4 ">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              for="number_of_people"
            >
              Number of people
            </label>
            <div className="relative">
              <select
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight"
                id="grid-state"
              >
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5 or more</option>
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
          <div className="flex items-center justify-between">
            <button
              className="py-2 px-8 rounded-r-lg rounded-l-lg bg-yellow-500 text-gray-50 font-medium uppercase border-yellow-600 border"
              type="button"
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default EnquiryForm;
