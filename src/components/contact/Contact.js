import React from 'react';
import Footer from '../layout/Footer';
import Paragraph from '../Paragraph';
import ContactList from './ContactList';

function Contact() {
  return (
    <>
      <div className="w-full mt-14 mb-6 lg:my-20 lg:mb-6">
        <h1 className="text-4xl text-blue-900 leading-tight">Get in touch!</h1>
        <Paragraph content="Questions or remarks? Contact us!" />
      </div>

      <div className="flex flex-col sm:flex-row sm:justify-between">
        <div>
          <form className="w-full max-w-lg">
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="name"
                >
                  First Name
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight"
                  type="text"
                  placeholder="Jane"
                />
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="lastName"
                >
                  Last Name
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight"
                  type="text"
                  placeholder="Doe"
                />
              </div>
            </div>

            <div className="w-full w-1/2 ">
              <label className="block">
                <span className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                  Textarea
                </span>
                <textarea
                  className="form-textarea mt-1 block w-full appearance-none block bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight"
                  rows="5"
                  placeholder="Enter your message and our team will get back to you within 15 minutes"
                ></textarea>
              </label>
            </div>

            <button
              className="my-6 px-6 py-2 rounded-r-lg rounded-l-lg bg-yellow-400 text-gray-50 font-medium uppercase border-yellow-500 border"
              type="submit"
            >
              Send
            </button>
          </form>
        </div>

        <div className="order-first sm:order-last md:ml-6">
          <ContactList />
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Contact;
