import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <>
      <div className=" bg-[#0a0047] h-[7vh] border-b-4 border-[#2c316a] font-bold px-[15vw] flex justify-between">
        <Link href="/" className='my-auto'>
          <div className=" flex">
            <p className=" my-auto text-2xl">[</p>
            <p className=" my-auto text-2xl text-[#97d3f6]">DAY</p>
            <p className=" my-auto text-2xl text-[#cc79fa]">WISE</p>
            <p className=" my-auto text-2xl">]</p>
          </div>
        </Link>
        <div className=" flex my-auto">
          <p className=" mr-5">User</p>
          <div className=" ">I</div>
        </div>
      </div>
    </>
  );
}

export default Navbar