import React from "react";

function Modal({ props, setModalIsOpen }) {
  const backHandler = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="rounded-md shadow-gray-700 bg-white p-4 text-center w-[30rem] z-10 h-[8rem] m-auto">
      <p>Are your sure?</p>
      <button
        onClick={backHandler}
        className="px-6 py-2 mx-4 text-pink-900 bg-transparent border border-pink-900 rounded cursor-pointer hover:bg-pink-300 hover:border-pink-300"
      >
        Cancel
      </button>
      <button className="px-6 py-2 mx-4 text-white bg-pink-800 rounded-t cursor-pointer hover:bg-pink-500 hover:border-pink-500">
        Confirm
      </button>
    </div>
  );
}

export default Modal;
