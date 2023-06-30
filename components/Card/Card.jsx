import React, { useState } from "react";
import { CheckSquare, Clock, MoreHorizontal } from "react-feather";
import Chip from "../Chip/Chip";
import CardInfo from "./CardInfo/CardInfo";
import Dropdown from "../Dropdown/Dropdown";

const Card = (props) => {
  const [showModal, setShowModal] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false)

  // console.log(props.card.labels[0].text)

  return (
    <>
      {showModal && <CardInfo onClose={() => setShowModal(false)} />}
      {/* card */}
      <div
        className=" p-[10px] rounded-xl bg-[#fff] flex flex-col gap-[10px] text-black"
        onClick={() => setShowModal(true)}
      >
        {/* card_top */}
        <div className=" flex gap-[5px] bg-yellow-200">
          {/* card_top_lables */}
          <div className=" flex-1 flex gap-[10px]">
            {
              props.card?.labels?.map((item,index)=>
                <Chip key={index} text={item.text} color={item.color} />
              )
            }
          </div>
          {/* card_top_more */}

          <div onClick={() => setShowDropdown(true)}>
            <MoreHorizontal className=" opacity-0 hover:opacity-100 transition-opacity duration-300" />
            {
              showDropdown && (
                <Dropdown onClose={() => setShowDropdown(false)}>
                  {/* card_dropdown */}
                  <div>
                    <p onClick={() => props.removeCard(props.card?.id,props.boardId)}>Delete Card</p>
                  </div>
                </Dropdown>
              )
            }
          </div>
        </div>
        {/* card_title */}
        <div className=" font-semibold">{props.card?.title}</div>
        {/* card_footer */}
        <div className=" flex justify-between items-center">
          <p className=" flex gap-[5px] items-center">
            <Clock />
            {props.card?.date}
          </p>
          <p className=" flex gap-[5px] items-center">
            <CheckSquare />
            1/4
          </p>
        </div>
      </div>
    </>
  );
};

export default Card;
