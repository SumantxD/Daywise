import React from 'react'
import { CheckSquare, Clock, MoreHorizontal } from 'react-feather'
import Chip from '../Chip/Chip'

const Card = () => {
  return (
    <>  
        {/* card */}
        <div className=' p-[10px] rounded-xl bg-[#fff] flex flex-col gap-[10px] text-black'>
            {/* card_top */}
            <div className=' flex gap-[5px] bg-yellow-200'>
                {/* card_top_lables */}
                <div className=' flex-1 flex gap-[10px]'>
                    <Chip text="Frontend" color="green"/>
                    <Chip close text="Frontend" color="green"/>
                </div> 
                <MoreHorizontal className=' opacity-0 hover:opacity-100 transition-opacity duration-300'/>
            </div>
            {/* card_title */}
            <div className=' font-semibold'>
                title
            </div>
            {/* card_footer */}
            <div className=' flex justify-between items-center'>
                <p className=' flex gap-[5px] items-center'><Clock/>29 Sep</p>
                <p className=' flex gap-[5px] items-center'><CheckSquare/>1/4</p>
            </div>
        </div>
    </>
  )
}

export default Card