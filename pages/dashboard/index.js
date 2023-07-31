import Board from '@/components/Board/Board'
import Chat from '@/components/Chat/Chat';
import Editable from '@/components/Editable/Editable'
import React, { useEffect, useState } from 'react'

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

const isClient = typeof window !== 'undefined';

const index = () => {



  // const [boards, setBoards] = useState([
  //   {
  //     id:Date.now() + Math.random()*2,
  //     title:"To Do",
  //     cards:[
  //       {
  //         id:Date.now()+Math.random(),
  //         title:"Card 1",
  //         tasks:[],
  //         labels:[
  //           {
  //             text:"frontend",
  //             color:"blue",
  //           },
  //           {
  //             text:"sex",
  //             color:"blue",
  //           }
  //         ],
  //         desc:"apple and mango",
  //         date:"2023-07-21",
  //       }
  //     ]
  //   },
  //   {
  //     id:Date.now() + Math.random()*2,
  //     title:"To Don't",
  //     cards:[
  //       {
  //         id:Date.now()+Math.random(),
  //         title:"Card 2",
  //         tasks:[],
  //         labels:[
  //           {
  //             text:"backend",
  //             color:"brown"
  //           }
  //         ],
  //         desc:"apple and mango",
  //         date:"2023-05-01"
  //       }
  //     ]
  //   }
  // ])

//  const [boards, setboards] = useState(JSON.parse(localStorage.getItem('kanban'))||[])

// const isClient = typeof window !== 'undefined';

// const [boards, setBoards] = useState(
//   isClient ? JSON.parse(localStorage.getItem('kanban')) || [] : []
// );

// useEffect(() => {
//   if (isClient) {
//     localStorage.setItem("kanban", JSON.stringify(boards));
//   }
// }, [boards]);

//Working of the datta storage
/*
--> the prev data will be stored in the local storage
--> for there first we extract it and store it in the board state
--> we also update the local storage whenever the board state is updated 
--> it is a higher level state which will manage all the data 
--> for the file download first we will have to create a function which will 
--> download all the relevant data --> and then prepare a downloadable file from it 
--> which can be plugged in the flowise application --> and then we can chat with the data 

*/

const initialState = isClient ? JSON.parse(localStorage.getItem('kanban')) || [] : [];

  const [boards, setBoards] = useState(initialState);

  useEffect(() => {
    if (isClient) {
      localStorage.setItem('kanban', JSON.stringify(boards));
    }
  }, [boards]);

// const [boards, setBoards] = useState(
//   JSON.parse(localStorage.getItem("prac-kanban")) || []
// );


  // const [boards, setBoards] = useState([]);

  // useEffect(() => {
  //   const storedData = sessionStorage.getItem('kanban');
  //   const parsedData = storedData ? JSON.parse(storedData) : [];
  //   setBoards(parsedData);
  // },[]);

  // useEffect(() => {
  //   sessionStorage.setItem('kanban', JSON.stringify(boards));
  // }, [boards]);
  

  //we will create state for the target card while drag and drop 
  const [target, setTarget] = useState({
    cid:"",
    bid:""
  })

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
  const removeCard = (cid, bid) => {
    const bIndex = boards.findIndex((item) => item.id === bid);
    if (bIndex < 0) return;
  
    // Find the index of the required card in the board
    const cIndex = boards[bIndex].cards.findIndex((item) => item.id === cid);
    if (cIndex < 0) return;
  
    // Delete the card from the board
    const tempBoards = [...boards];
    tempBoards[bIndex].cards.splice(cIndex, 1);
  
    setBoards(tempBoards);
  };
  

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


  const handleDragEnd=(e,cid, bid)=>{
    let s_bIndex,s_cIndex,t_bIndex,t_cIndex 
    //board index and card index of source
    //board index and card index of target

    e.preventDefault()

    console.log("aaya0")

    s_bIndex=boards.findIndex(item=>item.id===bid)
    if(s_bIndex<0)return;

    console.log("aaya1")

    s_cIndex=boards[s_bIndex].cards?.findIndex(item=>item.id===cid)
    if(s_cIndex<0)return;

    //now for target
    console.log("aaya2")

    t_bIndex=boards.findIndex(item=>item.id===target.bid)
    console.log("aaya3.0")
    if(t_bIndex<0)return;

    console.log("aaya3")

    t_cIndex=boards[t_bIndex].cards?.findIndex(item=>item.id===target.cid)
    if(t_cIndex<0)return;

    console.log("aaya4")

    const tempboards = [...boards]
    const tempCard = tempboards[s_bIndex].cards[s_cIndex]

    //now remove the tempCard from the source
    tempboards[s_bIndex].cards.splice(s_cIndex,1)

    //now push the tempcard after the target card
    tempboards[t_bIndex].cards.splice(t_cIndex,0,tempCard)

    setBoards(tempboards)

    console.log(boards)

    console.log('updated')

  }

  //now we will have to take these funcitons to the card as they will be trigerred there

  //functions for drap and drop data management and removal 
  //when we will start to drag, the "on-drag-enter" (built it function)
  //will get trigerred and it will pass the values up the prop
  //when we enter the target
  const handleDragEnter=(e,cid, bid)=>{
    console.log('Apple')
    e.preventDefault();
    setTarget({
      cid,
      bid,
    })
  }

  //now time to update data from the modal 
  const updateCard=(cid,bid,card)=>{
    const bIndex = boards.findIndex((item) => item.id === bid);
    if (bIndex < 0) return;
  
    // Find the index of the required card in the board
    const cIndex = boards[bIndex].cards.findIndex((item) => item.id === cid);
    if (cIndex < 0) return;

    const tempBoards = [...boards]

    tempBoards[bIndex].cards[cIndex] = card

    setBoards(tempBoards);

  }

  //function to extract all the data into a usable format 
  //first create a button and on-click event listner 
  //on the click event this function will get trigerred
  //it is running successfully 
  
  function generateFormattedString(boards) {
    let formattedString = '';
  
    for (const board of boards) {
      formattedString += `Title: ${board.title}\n\n`;
  
      for (const card of board.cards) {
        formattedString += `Subtitle: ${card.title} `;
        for (const label of card.labels) {
          formattedString += `${label.text} / `;
        }
        formattedString += '\n';
  
        formattedString += `Description: ${card.desc}\n\n`;
      }
  
      formattedString += '\n\n';
    }
  
    return formattedString;
  }

  const extractData = () => {
    // console.log(boards);
    // JSON.stringify(boards)
    // console.log(JSON.stringify(boards))
    const result = generateFormattedString(boards);
    console.log(result);
  };



  return (
    <>
      {/* app_outer */}
      <button
        onClick={extractData}
        className="fixed bottom-12 right-20 border-[#2c316a] rounded-xl text-3xl font-medium p-5 mt-14 bg-[#ef087bb6] hover:bg-[#ef087a] duration-500 transition-all"
      >
        📒
      </button>
      <Chat/>
      <div className=' px-[15vw] h-[90vh]'>
        {/* <div className=' w-full h-[25vh] border-2 border-slate-800 mt-5 '> */}
        {/* <div className=' w-full h-[25vh] mt-5 '>
          <div className=' w-[12rem] min-h-full bg-[#60daed0d] rounded-xl border-4 border-[#2c316a] flex items-center'> <p className='mx-auto text-7xl'>+</p></div>
        </div> */}
        {/* app_boards */}
        <div className='  flex gap-14 border-2 border-slate-800 mt-5 h-full p-[20px] pb-[5px] max-w-[80vw] overflow-x-auto scroll'>
          {/* the function and data to remove board is here */}
          {/* but the button to temove the board is inside board so we will have to pass it there */}
          {
            boards.map((item)=><Board
              key = {item.id}
              board = {item}
              removeBoard = {removeBoard}
              addCard = {addCard}
              removeCard = {removeCard}
              handleDragEnd = {handleDragEnd}
              handleDragEnter = {handleDragEnter}
              updateCard = {updateCard}
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