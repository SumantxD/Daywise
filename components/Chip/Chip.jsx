import React from 'react'
import { X } from 'react-feather'

const Chip = (props) => {
  return (
    <>
        <div className=' flex gap-[10px] items-center px-[10px] py-[2px] rounded-[40px] w-fit' style={{ backgroundColor: props.color }}>
            {props.text}
            {props.close && <X className=' w-5 h-5 cursor-pointer' onClick={() => props.onClose ? props.onClose() : ""}/>}
        </div>
    </>
  )
}

export default Chip