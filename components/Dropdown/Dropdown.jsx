import React, { useEffect, useRef } from 'react'

const Dropdown = (props) => {

    const dropdownRef = useRef()


    //whenever the document will get mounted we will clickListen in the entire doucment
    //then we will distinguis it later that where did it got clicked
    //where we have clicked is it under the dropdownRef or not
    //! -> we have clicked outside
    const handleClick = (event) => {
      if (dropdownRef && !dropdownRef.current.contains(event.target)){
        if(props.onClose){
          props.onClose()
        }
      }
      
    };

    useEffect(() => {
      document.addEventListener('mousedown',handleClick)
      //we will remove the event listner on unmount
      return () => {
        document.removeEventListener('mousedown',handleClick)
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