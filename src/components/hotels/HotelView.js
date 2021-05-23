import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { API } from '../../constants/api';
import EnquiryForm from '../enquiry/EnquiryForm';
import Footer from '../layout/Footer';

function HotelView() {
  const [hotel, setHotel] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  let history = useHistory();

  const { id } = useParams();

  if (!id) {
    history.push('/');
  }

  const url = API + '/hotels/' + id;

  useEffect(
    function () {
      async function fetchData() {
        try {
          const response = await fetch(url);

          if (response.ok) {
            const json = await response.json();
            setHotel(json);
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
    [url]
  );

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>An error occured: {error}</div>;
  }

  const { title, address, price } = hotel;

  return (
    <div>
      <div className="w-full mt-14 mb-6 lg:my-20 lg:mb-6 ">
        <img
          className="h-96 w-full object-cover"
          src={hotel.images[0].formats.large.url}
          alt={title}
        />
        <div className="flex flex-col rounded overflow-hidden shadow mt-4 md:p-6 p-4">
          <div>
            <h1 className="text-4xl text-blue-900 leading-tight">{title}</h1>
            <div className="tracking-wide text-xs font-medium text-blue-500 mt-2">
              {address}
            </div>
            <h2 className="text-xl text-blue-900 font-medium mt-4 leading-tight">
              Price
            </h2>
            <div className="tracking-wide text-md font-medium text-blue-500 mt-2">
              {price} NOK/Night
            </div>
            <h2 className="text-xl text-blue-900 font-medium mt-4 leading-tight">
              Description
            </h2>
            <p className="text-gray-500 text-base mt-4">
              {title} is located in the heart of the historic center of Bergen
              in an extremely characteristic, quite and lively area within short
              walk distance to all sites and is surrounded by the extraordinary
              beauty of churches, buildings, shops and monuments.
            </p>
          </div>
          <div>
            <h2 className="text-xl text-blue-900 font-medium mt-4 leading-tight">
              Book hotel
            </h2>
            <EnquiryForm />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default HotelView;
