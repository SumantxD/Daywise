import React, { useState } from 'react'
import { X } from 'react-feather'

const Editable = (props) => {
  const [showEdit, setShowEdit] = useState(false);
  const [inputValue, setInputValue] = useState(props.default || "")

  return (
    <>
      <div className="text-black w-full">
        {showEdit ? (
          // editable_edit
          <form
            className={` ${props.editClass || ""} flex flex-col gap-[10px]`}
            onSubmit={(event) => {
              event.preventDefault();
              if (props.onSubmit) props.onSubmit();
            }}
          >
            <input autoFocus type="text" placeholder={props.placeholder || "Enter Item"} defaultValue={props.text} className=' rounded-sm outline-none border-2 border-cyan-300 p-[10px]'/>
            {/* editable_edit_footer */}
            <div className=' flex gap-[10px] items-center'>
              <button type="submit" className=' outline-none border-none bg-cyan-500 hover:bg-cyan-700 transition-colors duration-200 p-[10px] rounded-md text-white'>{props.buttonText || "Add"}</button>
              <X onClick={() => setShowEdit(false)} className=' cursor-pointer'/>
            </div>
          </form>
        ) : (
          // editable_display
          <p className={` ${props.displayClass || ""} bg-[#f8f8f8] rounded-md p-[10px] text-center hover:bg-[#ccc] transition-colors duration-200 cursor-default shadow-md`} onClick={() => setShowEdit(true)}>{props.text || "Add item"}</p>
        )}
      </div>
    </>
  );
};


export default Editable