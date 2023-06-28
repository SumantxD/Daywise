import React from "react";

const Modal = (props) => {
  return (
    <>
      {/* modal */}
      <div
        className=" fixed top-0 left-0 h-[100vh] w-full bg-slate-700  bg-opacity-50 flex items-center justify-center"
        onClick={() => (props.onClose ? props.onClose() : "")}
      >
        {/* modal_content */}
        {/* we want to disable it's event bubbling so that it does not trigger the modal click */}
        <div
          className=" bg-white rounded-md opacity max-h-[95vh] overflow-y-auto scrollbar"
          onClick={(event) => event.stopPropagation()}
        >
          {props.children}
        </div>
      </div>
    </>
  );
};

export default Modal;
