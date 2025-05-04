import React from "react";

const Modal = () => {
  return (
    <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
      <div className="modal-box">
        <h3 className="font-bold text-lg text-center text-yellow-600">Appointment Booked!</h3>
        <p className="py-4 text-center">Thank you for choosing our service. We will contact you soon.</p>
        <div className="modal-action flex justify-center">
          <form method="dialog">
            <button className="btn btn-warning text-white">Close</button>
          </form>
        </div>
      </div>
    </dialog>
  );
};

export default Modal;
