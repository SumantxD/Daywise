import Board from '@/components/Board/Board'
import Editable from '@/components/Editable/Editable'
import React from 'react'

/*
 we are planning to add a Kanban Board

 1) we have a navbar
 2) below it we have a div
 3) inside that div we have a board container
 4) then we have board component
 5) and then we have a card component

 flow -> 
 -> we will have an array of boards
 -> where individual board will have
 1) title
 2) labels
 3) tasks
 etc...

 1) firt we will have a navbar
 2) below it we will have an outer container for the boards
 3) and then we will have container for the board


*/

const index = () => {
  return (
    <>
      {/* app_outer */}
      <div className=' px-[15vw] h-[100vh] '>
        {/* <div className=' w-full h-[25vh] border-2 border-slate-800 mt-5 '> */}
        <div className=' w-full h-[25vh] mt-5 '>
          <div className=' w-[12rem] min-h-full bg-[#60daed0d] rounded-xl border-4 border-[#2c316a] flex items-center'> <p className='mx-auto text-7xl'>+</p></div>
        </div>
        {/* app_boards */}
        <div className=' min-w-fit flex gap-14 border-2 border-slate-800 mt-5 h-full p-[20px] pb-[5px]'>
          <Board/>
          <Board/>
          <Editable/>
        </div>
      </div>
    </>
  )
}

export default index