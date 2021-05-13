import React from 'react';
import Paragraph from '../Paragraph';
import HeaderImage from '../../media/HeaderImage.jpg';
import Benefits from '../layout/Benefits';
import Footer from '../layout/Footer';

function Home() {
  return (
    <>
      <div className="flex flex-col justify-between items-center sm:flex-row my-10 mb-6 lg:my-20 lg:mb-6 rounded-lg bg-gray-50 shadow-inner p-6">
        <div>
          <h1 className="text-center md:text-left text-4xl lg:text-5xl text-blue-900 leading-tight">
            There is a place for everyone in Bergen
          </h1>
          <Paragraph content="Find deals on hotels, homes and much more..." />

          {/* Search input */}
          <div>
            <form className="flex mt-6 justify-center sm:justify-start	">
              <input
                className="rounded-l-lg p-2 border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white lg:px-8"
                placeholder="search hotels"
              />
              <button className="px-8 rounded-r-lg bg-yellow-500 text-gray-50 font-medium uppercase border-yellow-500 border-t border-b border-r">
                Search
              </button>
            </form>
          </div>
        </div>
        <div>
          <img
            src={HeaderImage}
            alt="Big building in Bergen"
            className="w-full mt-8 md:mt-0 sm:pl-6 max-w-lg"
          />
        </div>
      </div>

      <div className="mt-20">
        <h1 className="text-center md:text-left text-2xl lg:text-3xl text-blue-900 sm:mt-20 ">
          Benefits of using Holidaze
        </h1>
        <Paragraph content="We don't need to convince you why you should choose us, but still.. we want to brag about it" />
        <div>
          <Benefits />
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Home;
