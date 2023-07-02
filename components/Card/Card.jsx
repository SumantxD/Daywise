import React, { useState } from "react";
import { CheckSquare, Clock, MoreHorizontal } from "react-feather";
import Chip from "../Chip/Chip";
import CardInfo from "./CardInfo/CardInfo";
import Dropdown from "../Dropdown/Dropdown";

/*
adding drag and drop feature on the card 

1) on drag enter and on drag end event will be used on the card 

2) we will make the source on onDragEnd

3) and the target will be the card on which we are palnning to drop it on 

//after making sorce and target

//we will have to remove it form one pace and add it to another place

*/

const Card = (props) => {
  const [showModal, setShowModal] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false)

  // console.log(props.card.labels[0].text)


  return (
    <>
      {showModal && (
        <CardInfo
          onClose={() => setShowModal(false)}
          card={props.card}
          updateCard={props.updateCard}
          boardId={props.boardId}
        />
      )}
      {/* card */}
      <div
        className=" p-[10px] rounded-md bg-[#fff] flex flex-col gap-[10px] text-black group"
        onClick={() => setShowModal(true)}
        draggable
        onDragEnter={(e) =>
          props.handleDragEnter(e, props.card?.id, props.boardId)
        }
        onDragEnd={(e) => props.handleDragEnd(e, props.card?.id, props.boardId)}
        onMouseLeave={() => setShowDropdown(false)}
      >
        {/* card_top */}
        <div className=" flex gap-[5px]">
          {/* card_title */}
          <div className=" font-semibold flex-1">{props.card?.title}</div>

          {/* card_top_more */}
          <div className=" relative">
            <MoreHorizontal
              className=" opacity-0 group-hover:opacity-100 hover:cursor-pointer  transition-opacity duration-300 "
              onClick={(event) => {
                event.stopPropagation();
                setShowDropdown(!showDropdown);
              }}
            />
            {showDropdown && (
              <Dropdown
                onClose={() => {
                  setShowDropdown(false);
                }}
              >
                {/* card_dropdown */}
                <div className=" shadow-md bg-cyan-400 p-2 hover:cursor-pointer text-white rounded-md z-20 absolute -translate-x-16">
                  <p
                    onClick={() => {
                      props.removeCard(props.card?.id, props.boardId);
                      console.log("tried to delete");
                    }}
                  >
                    Delete Card
                  </p>
                </div>
              </Dropdown>
            )}
          </div>
        </div>

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
        {/* card_top_lables */}
        <div className=" justify-end flex gap-[10px]">
          {props.card?.labels?.map((item, index) => (
            <Chip key={index} text={item.text} color={item.color} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Card;
