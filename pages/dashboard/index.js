import Board from '@/components/Board/Board'
import Editable from '@/components/Editable/Editable'
import React, { useState } from 'react'

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


  const [boards, setBoards] = useState([
    {
      id:Date.now() + Math.random()*2,
      title:"To Do",
      cards:[
        {
          id:Date.now()+Math.random(),
          title:"Card 1",
          tasks:[],
          labels:[
            {
              text:"frontend",
              color:"blue",
            }
          ],
          desc:"apple and mango",
          date:"Date",
        }
      ]
    },
    {
      id:Date.now() + Math.random()*2,
      title:"To Don't",
      cards:[
        {
          id:Date.now()+Math.random(),
          title:"Card 2",
          tasks:[],
          labels:[
            {
              text:"backend",
              color:"brown"
            }
          ],
          desc:"apple and mango",
          date:"Date"
        }
      ]
    }
  ])

  //we will create a card and push it inside a baord using it's id
  const addCard = (title,bid) => {
    const card = {
      id:Date.now() + Math.random(),
      title,
      labels: [],
      tasks: [],
      date:"",
      desc:"",
    }

    // now we will get the item index using it's id
    const index = boards.findIndex(item=>item.id === bid)

    //we did not get the board with the designaged id
    if(index < 0) return;

    const tempBoards = [...boards]
    tempBoards[index].cards.push(card)
    setBoards(tempBoards)

  }

  //for that we need the cardId and the boardId
  const removeCard = (cid,bid) => {

    const bIndex = boards.findIndex(item=>item.id === bid)
    if(bIndex < 0) return;

    //now in this board we will find the index of the required card
    const cIndex = boards[bIndex].findIndex(item=>item.id === cid) 
    if(cIndex < 0) return;
     
    //now that we have got the card we will delete it from the board
    const tempBoards = [...boards]
    tempBoards[bIndex].cards.splice(cIndex,1);

    setBoards(tempBoards);
  }

  //now time to do the same for boards
  const addBoard = (title) => {
    setBoards([
      ...boards,
      {
        id: Date.now() + Math.random(),
        title,
        cards:[],
      },
    ])
  }

  const removeBoard = (bid) => {

    const tempBoards = boards.filter(item => item.id!==bid)
    setBoards(tempBoards)
  }



  return (
    <>
      {/* app_outer */}
      <div className=' px-[15vw] h-[100vh]'>
        {/* <div className=' w-full h-[25vh] border-2 border-slate-800 mt-5 '> */}
        <div className=' w-full h-[25vh] mt-5 '>
          <div className=' w-[12rem] min-h-full bg-[#60daed0d] rounded-xl border-4 border-[#2c316a] flex items-center'> <p className='mx-auto text-7xl'>+</p></div>
        </div>
        {/* app_boards */}
        <div className=' min-w-fit flex gap-14 border-2 border-slate-800 mt-5 h-full p-[20px] pb-[5px]'>
          {/* the function and data to remove board is here */}
          {/* but the button to temove the board is inside board so we will have to pass it there */}
          {
            boards.map((item)=><Board
              key = {item.id}
              board = {item}
              removeBoard = {removeBoard}
              addCard = {addCard}
              removeCard = {removeBoard}
            />)
          }
          {/* app_boards_board */}
          <div className=' min-w-[290px] w-[290px]'>
            <Editable
              text = "Add Board"
              placeholder = "Enter board title"
              onSubmit={(value) => addBoard(value)}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default index