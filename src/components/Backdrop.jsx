import React from "react";

function Backdrop({ children }) {
  return (
    <div className="fixed z-0 bg-black opacity-75 w-[100%] h-screen top-0 left-0 flex justify-center align-middle">
      {children}
    </div>
  );
}

export default Backdrop;
