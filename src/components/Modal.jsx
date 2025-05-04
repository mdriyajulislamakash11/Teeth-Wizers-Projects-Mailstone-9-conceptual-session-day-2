import React from "react";

const Modal = () => {
    const handleSubmit = (e) => {
        e.preventDefault()

    }




  return (
    <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
      <div className="modal-box">
        <h3 className="font-bold text-lg text-center text-yellow-600 mb-4">
          Book Your Appointment
        </h3>

        {/* Form */}
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="flex gap-4">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              className="input input-bordered w-full"
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              className="input input-bordered w-full"
              required
            />
          </div>

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            className="input input-bordered w-full"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            className="input input-bordered w-full"
            required
          />

          <input
            type="date"
            name="appointmentDate"
            className="input input-bordered w-full"
            required
          />

          <textarea
            name="address"
            placeholder="Address"
            className="textarea textarea-bordered w-full"
            rows="3"
            required
          ></textarea>

          <button
            type="submit"
            className="btn btn-warning w-full text-white font-semibold"
          >
            Make Appointment
          </button>
        </form>

        <div className="modal-action justify-center mt-4">
          <form method="dialog">
            <button className="btn btn-outline btn-sm">Close</button>
          </form>
        </div>
      </div>
    </dialog>
  );
};

export default Modal;
