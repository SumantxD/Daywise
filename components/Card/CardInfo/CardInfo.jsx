import Chip from "@/components/Chip/Chip";
import Editable from "@/components/Editable/Editable";
import Modal from "@/components/Modal/Modal";
import React, { useEffect, useState } from "react";
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

  //we will destructure all the card data here
  // const{title,labels,desc,date,tasks} = props.card

  //we can create an object that will represent an entire card 
  //so that we can send it back when updated
  //we will also make it a state so that we can update it right now

  const [values, setValues] = useState({...props.card})

  //after making it a state 
  //whenever the state will change we will use useEffect to call the updateCard


  const addLabel = (value,color) => {

    //before adding we will search that this label already exists or not 
    //if it exists we will not add it

    const index = values.labels?.findIndex(item => item.text===value)
    if(index > -1)return

    const label = {
      text:value,
      color,
    }

    //now add the new label

    setValues({...values,labels:[...values.labels,label]})

    setActiveColor("")

  }

  const removeLabel = (text) => {

    const tempLabels = values.labels?.filter(item => item.text!=text)

    setValues({...values,labels:tempLabels})

  }

  useEffect(() => {

    props.updateCard(props.card.id, props.boardId,values)
     
  }, [values])
  

  // const values = {
  //   title:props.title,
  //   albels:props.labels,
  //   desc:props.desc,
  //   date:props.date,
  // }

  console.log(props.card)

  const currentDate = new Date().toISOString().substring(0, 10);


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
              Title 
            </div>
            <div className=" w-fit">
              <Editable
                text={values.title}
                default={values.title}
                placeholder="Enter Title"
                buttonText="Set Title"
                onSubmit={(value)=>setValues({...values,title:value})}
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
                text={values.desc}
                placeholder="Enter Title"
                buttonText="Set Description"
                onSubmit={(value)=>setValues({...values,desc:value})}
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
                defaultValue={values.date?new Date(values.date).toISOString().substring(0,10):""}
                onChange={(event)=>setValues({...values, date:event.target.value})}
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
            {/* cardinfo_box_labels */}
            <div className=" flex gap-[10px] flex-wrap">
              {values.labels?.map((item, index) => (
                <Chip
                  close
                  onClose={() => removeLabel(item.text)}
                  key={item.text + index}
                  color={item.color}
                  text={item.text}
                />
              ))}
            </div>
            {/* cardinfo_box_colors */}
            <div className=" flex gap-[15px] items-center">
              {/* <ul className=" bg-red-400"> */}
              {colors.map((color, index) => (
                <li
                  key={index}
                  className={`h-[24px] w-[24px] active rounded-full list-none border-2 ${
                    color === activeColor ? "border-slate-700" : ""
                  } `}
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
                onSubmit={(value)=>addLabel(value,activeColor)}
              />
            </div>
          </div>

          {/* cardinfo_box */}
          <div className=" flex flex-col gap-[20px]">
            {/* cardinfo_box_title */}
            <div className=" flex gap-[10px] items-center">
              <FileText />
              Enter Document
            </div>
            <div className=" w-fit">
              <input
                type="file"
                className=" outline-none border-2 border-slate-600 rounded-md p-[10px]"
              />
            </div>
          </div>
        </div>
        <h1>hi there</h1>
      </Modal>
    </>
  );
};

export default CardInfo;
