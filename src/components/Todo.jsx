import { useState } from "react";
import Backdrop from "../components/Backdrop";
import Modal from "../components/Modal";

function Todo(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const deleteHandler = () => {
    setModalIsOpen(true);
  };

  return (
    <div>
      <div className="p-4 m-6 bg-white rounded shadow shadow-black w-80">
        <h2 className="text-gray-700">{props.text}</h2>
        <div className="text-right">
          <button
            onClick={deleteHandler}
            className="px-6 py-2 mx-4 text-white bg-pink-800 rounded-t cursor-pointer hover:bg-pink-500 hover:border-pink-500"
          >
            Delete
          </button>
        </div>
        {modalIsOpen ? (
          <Backdrop>
            <Modal setModalIsOpen={setModalIsOpen} />
          </Backdrop>
        ) : null}
      </div>
    </div>
  );
}

export default Todo;
