import React, { useState } from 'react'
import { MoreHorizontal } from 'react-feather'
import Card from '../Card/Card'
import Editable from '../Editable/Editable'
import Dropdown from '../Dropdown/Dropdown'

const Board = (props) => {

    const [showDropdown, setShowDropdown] = useState(false)

    // console.log(props)


  return (
    <>
        <div className=' min-w-[290px] flex flex-col gap-[20px] bg-red-100 max-h-full h-full'>
            {/* board_top */}
            <div className=' flex'>
                {/* board_top_title */}
                <p className=' flex-1 flex align-middle gap-[8px]'>
                    {props.board?.title}<span className=' text-slate-700'>{` ${props.board?.cards?.length}`}</span> 
                </p>

                {/* div_top_more */}
                <div className='relative text-black' onClick={()=>setShowDropdown(true)}>
                    <MoreHorizontal/>
                    {
                        showDropdown && 
                    
                        <Dropdown
                            // onClose = {()=>setShowDropdown(false)}
                        >
                            {/* board_dropdown */}
                            <div>
                                <p onClick={()=>props.removeBoard(props.board?.id)}>Delete Board</p>
                            </div>
                        </Dropdown>
                    }
                </div>

            </div>
            {/* board_cards */}
            <div className=' bg-[#f3f0f0] flex flex-col gap-[10px] p-[10px] border-b-[10px] overflow-y-auto h-full flex-1 scrollbar'>
                {
                    props.board?.cards?.map(item => <Card
                        key={item.id}
                        card={item}
                        removeCard={props.removeCard}
                        boardId={props.board?.id}
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