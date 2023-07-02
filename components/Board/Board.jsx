import React, { useState } from 'react'
import { MoreHorizontal } from 'react-feather'
import Card from '../Card/Card'
import Editable from '../Editable/Editable'
import Dropdown from '../Dropdown/Dropdown'

const Board = (props) => {

    const [showDropdown, setShowDropdown] = useState(false)



  return (
    <>
        <div className=' min-w-[290px] flex flex-col gap-[20px] bg-teal-200  max-h-full h-full rounded-sm outline-none border-2 border-cyan-300'>
            {/* board_top */}
            <div className=' flex'>
                {/* board_top_title */}
                <p className=' flex-1 flex align-middle gap-[8px] text-black  ml-2 mt-2'>
                    {props.board?.title}<span className=' text-slate-700 '>{` ${props.board?.cards?.length}`}</span> 
                </p>

                {/* div_top_more */}
                <div className='relative pr-2 text-black h-fit mr-1 mt-1'>
                    <MoreHorizontal className=' hover:cursor-pointer ' onClick={()=>setShowDropdown(true)} />
                    {
                        showDropdown && 
                    
                        <Dropdown
                            onClose = {()=>setShowDropdown(false)}
                            lol={'lol'}
                        >
                            {/* board_dropdown */}
                            <div className=' shadow-md bg-cyan-400 p-2 hover:cursor-pointer text-white rounded-md z-20 absolute -translate-x-16'>
                                <p onClick={()=>props.removeBoard(props.board?.id)}>Delete Board</p>
                            </div>
                        </Dropdown>
                    }
                </div>

            </div>
            {/* board_cards */}
            <div className=' bg-[#f3f0f0] flex flex-col gap-[10px] p-[10px] overflow-y-auto h-full flex-1 scrollbar'>
                {
                    props.board?.cards?.map(item => <Card
                        key={item.id}
                        card={item}
                        removeCard={props.removeCard}
                        boardId={props.board?.id}
                        handleDragEnd={props.handleDragEnd}
                        handleDragEnter={props.handleDragEnter}
                        updateCard = {props.updateCard}
                    />)
                }
                <Editable
                    text = "Add Card"
                    placeholder = "Enter Card Title"
                    onSubmit={(value) => props.addCard(value,props.board?.id)}
                />
            </div>
        </div>
    </>
  )
}
  
export default Board