import Editable from "@/components/Editable/Editable";
import Modal from "@/components/Modal/Modal";
import React, { useState } from "react";
import { Calendar, FileText, List, Tag, Type } from "react-feather";

const CardInfo = (props) => {

  const colors = [
    '#a8193d',
    '#4fcc25',
    '#1ebffa',
    '#8da377',
    '#9975bd',
    '#cf61a1',
    '#240959'
  ];

  const [activeColor, setActiveColor] = useState("")


  return (
    <>
      {/* we will pass the onClose function as prop here */}
      <Modal
        onClose={() => {
          props.onClose();
          // console.log("calling");
        }}
        scrollbar
      >
        apple
        {/* cardinfo */}
        <div className=" p-[30px] flex flex-col gap-[30px] text-black w-[600px]">
          {/* cardinfo_box */}
          <div className=" flex flex-col gap-[10px]">
            {/* cardinfo_box_title */}
            <div className=" flex gap-[10px] items-center">
              <Type />
              Title no 1
            </div>
            <div className=" w-fit">
              <Editable
                text={"Hello There"}
                placeholder="Enter Title"
                bottomText="Set Title"
              />
            </div>
          </div>

          {/* cardinfo_box */}
          <div className=" flex flex-col gap-[20px]">
            {/* cardinfo_box_title */}
            <div className=" flex gap-[10px] items-center">
              <List />
              Description
            </div>
            <div className=" w-fit">
              <Editable
                text={"Your description here"}
                placeholder="Enter Title"
                bottomText="Set Description"
              />
            </div>
          </div>

          {/* cardinfo_box */}
          <div className=" flex flex-col gap-[20px]">
            {/* cardinfo_box_title */}
            <div className=" flex gap-[10px] items-center">
              <Calendar />
              Date
            </div>
            <div className=" w-fit">
              <input
                type="date"
                className=" outline-none border-2 border-slate-600 rounded-md p-[10px]"
              />
            </div>
          </div>

          {/* cardinfo_box */}
          <div className=" flex flex-col gap-[20px]">
            {/* cardinfo_box_title */}
            <div className=" flex gap-[10px] items-center">
              <Tag />
              Labels
            </div>
            {/* cardinfo_box_colors */}
            <div className=" flex gap-[15px] items-center">
              {/* <ul className=" bg-red-400"> */}
              {colors.map((color, index) => (
                <li
                  key={index}
                  className={`h-[24px] w-[24px] active rounded-full list-none border-2 ${color === activeColor ? "border-slate-700" : ""} `}
                  style={{ backgroundColor: color }}
                  onClick={() => setActiveColor(color)}
                ></li>
                // <li key={index} className={` w-10 h-10 bg-[${color}]  rounded-full border-2 border-slate-800`}>apple</li>
                // <div className={`w-[20px] h-[20px] bg-[${color}]  border-2 border-slate-500 rounded-full`}>a</div>
                // <li key={index} style={{backgroundColor:color}}></li>
              ))}
              {/* </ul> */}
            </div>
            <div className=" w-fit">
              <Editable
                text={"Your description here"}
                placeholder="Enter Title"
                bottomText="Add Label"
              />
            </div>
          </div>

          {/* cardinfo_box */}
          <div className=" flex flex-col gap-[20px]">
            {/* cardinfo_box_title */}
            <div className=" flex gap-[10px] items-center">
              <List />
              Description
            </div>
            <div className=" w-fit">
              <input type="file" className=" outline-none border-2 border-slate-600 rounded-md p-[10px]"/>
            </div>
          </div>

        </div>
        <h1>hi there</h1>
      </Modal>
    </>
  );
};

export default CardInfo;
