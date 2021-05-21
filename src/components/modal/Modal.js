import React from 'react';
import EnquiryForm from '../EnquiryForm';

function Modal({ showModal, setShowModal }) {
  return (
    <>
      {showModal ? (
        <div>
          <div showModal={showModal}>
            <div>
              <EnquiryForm />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default Modal;
