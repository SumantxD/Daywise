import React, { useEffect, useRef } from 'react'

const Dropdown = (props) => {

    const dropdownRef = useRef()

    //where we have clicked is it under the dropdownRef or not
    //! -> we have clicked outside
    const handleClick = (event) => {
        if(dropdownRef && !dropdownRef.current.contains(event.target))props.onClose ? props.onClose() : " ";
    }

    useEffect(() => {
      document.addEventListener('click',handleClick)
    
      return () => {
        document.removeEventListener('click',handleClick)
      }
    })
    

  return (
    <>
        <div ref = {dropdownRef} className=' absolute top-full right-0'>
            {props.children}
        </div>
    </>
  )
}

export default Dropdown