import React from 'react';
import { PinIcon, PhoneIcon, MailIcon } from '@iconicicons/react';

function ContactList() {
  return (
    <div>
      <div className="flex flex-col md:flex-row items-center md:mb-6">
        <div className="flex justify-center items-center w-20 h-20 bg-red-200 rounded-lg text-red-500 shadow-inner">
          <PinIcon />
        </div>
        <div className="my-4 sm:ml-4 ">
          <h4 className="font-medium text-center text-red-500 md:text-left">
            Nyhavnsbakken 226, 5042, Bergen
          </h4>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center md:mb-6">
        <div className="flex justify-center items-center w-20 h-20 bg-green-100 rounded-lg text-green-500 shadow-inner">
          <PhoneIcon />
        </div>
        <div className="my-4 sm:ml-4">
          <h4 className="font-medium text-center text-green-500 md:text-left">
            +47 (80) 53 80 82
          </h4>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center md:mb-6">
        <div className="flex justify-center items-center w-20 h-20 bg-blue-100 rounded-lg text-blue-500 shadow-inner">
          <MailIcon />
        </div>
        <div className="my-4 sm:ml-4">
          <h4 className="font-medium text-center text-blue-500 md:text-left">
            hello@holidaze.com
          </h4>
        </div>
      </div>
    </div>
  );
}

export default ContactList;
