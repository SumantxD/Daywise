import React from 'react'
import { X } from 'react-feather'

const Chip = (props) => {
  return (
    <>
        <div className=' flex gap-[10px] items-center p-[10px] rounded-[40px] bg-green-200 w-fit'>
            {props.text}
            {props.close && <X className=' w-5 h-5 cursor-pointer' onClick={props.onClose ? props.onClose() : ""}/>}
        </div>
    </>
  )
}

export default Chip