import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-[#ECEEFA] min-h-screen'>
      <div className='flex flex-col items-center w-full px-3 xl:flex-row xl:justify-around xl:py-60 py-36 xl:px-20 md:px-2'>
        <div className='text-[#3a1f5e] flex flex-wrap flex-col xl:items-start md:items-center'>
        <h1 className='font-extrabold text-5xl md:text-6xl'>Simple</h1>
        <h2 className='font-extrabold text-5xl md:text-6xl'>Calculator</h2>
        <p className='font-bold text-3xl md:text-5xl text-[#5e4958]'>Using javascript</p>
        <div className='flex mt-6 text-black xl:mb-0 mb-6 sm:mb-14'>
          <div className='flex flex-col items-center justify-center font-extrabold relative left-[13%]'>
            <h1>CSS</h1>
            <div>
              <img className='w-[75px] md:w-[100px]' src="css.png" alt="" />
            </div>
          </div>
          <div className='flex flex-col items-center justify-center font-extrabold relative z-10'>
            <h1>HTMl</h1>
            <div>
              <img className='w-[100px] md:w-[130px]' src="html.png" alt="" />
            </div>
          </div>
          <div className='flex flex-col items-center justify-center font-extrabold relative right-[11%]'>
            <h1>js</h1>
            <div>
              <img className='w-[75px] md:w-[100px]' src="js.png" alt="" />
            </div>
          </div>
          </div>
          </div>
      <div className='w-[240px] md:w-[300px] lg:w-[330px] flex flex-col items-center bg-[#391c5a] py-7 px-2 rounded-lg shadow-black lg-w]'>
        <div className='w-[90%] h-[55px] px-2 mb-8 font-normal flex justify-end items-center text-black bg-[#eceefa] rounded-sm text-lg'></div>
      
      <div className='flex flex-wrap items-center justify-center gap-4'>
        <div className='px-[5%]  bg-[#CC6530] p-[4%] rounded-md  text-white font-bold cursor-pointer shadow-md shadow-white'>Off</div>
        <div className='px-[7%]   p-[4%] rounded-md bg-[#6f47be] text-white font-bold cursor-pointer shadow-md shadow-white'>(</div>
          <div className='px-[7%]   p-[4%] rounded-md bg-[#6f47be] text-white font-bold cursor-pointer shadow-md shadow-white'>)</div>
          <div className='px-[7%]   p-[4%] rounded-md bg-[#6f47be] text-white font-bold cursor-pointer shadow-md shadow-white'>/</div>
          <div className='px-[7%]   p-[4%] rounded-md bg-[#6f47be] text-white font-bold cursor-pointer shadow-md shadow-white'>9</div>
          <div className='px-[7%]   p-[4%] rounded-md bg-[#6f47be] text-white font-bold cursor-pointer shadow-md shadow-white'>8</div>
          <div className='px-[7%]   p-[4%] rounded-md bg-[#6f47be] text-white font-bold cursor-pointer shadow-md shadow-white'>7</div>
          <div className='px-[7%]   p-[4%] rounded-md bg-[#6f47be] text-white font-bold cursor-pointer shadow-md shadow-white'>*</div>
          <div className='px-[7%]   p-[4%] rounded-md bg-[#6f47be] text-white font-bold cursor-pointer shadow-md shadow-white'>6</div>
          <div className='px-[7%]   p-[4%] rounded-md bg-[#6f47be] text-white font-bold cursor-pointer shadow-md shadow-white'>5</div>
          <div className='px-[7%]   p-[4%] rounded-md bg-[#6f47be] text-white font-bold cursor-pointer shadow-md shadow-white'>4</div>
          <div className='px-[7%]   p-[4%] rounded-md bg-[#6f47be] text-white font-bold cursor-pointer shadow-md shadow-white'>+</div>
          <div className='px-[7%]   p-[4%] rounded-md bg-[#6f47be] text-white font-bold cursor-pointer shadow-md shadow-white'>3</div>
          <div className='px-[7%]   p-[4%] rounded-md bg-[#6f47be] text-white font-bold cursor-pointer shadow-md shadow-white'>2</div>
          <div className='px-[7%]   p-[4%] rounded-md bg-[#6f47be] text-white font-bold cursor-pointer shadow-md shadow-white'>1</div>
          <div className='px-[7%]   p-[4%] rounded-md bg-[#6f47be] text-white font-bold cursor-pointer shadow-md shadow-white'>-</div>
          <div className='px-[5%]   bg-[#CE3E5C]  p-[4%] rounded-md text-white font-bold cursor-pointer shadow-md shadow-white'>Del</div>
          <div className='px-[7%]   p-[4%] rounded-md bg-[#6f47be] text-white font-bold cursor-pointer shadow-md shadow-white'>.</div>
          <div className='px-[7%]   p-[4%] rounded-md bg-[#6f47be] text-white font-bold cursor-pointer shadow-md shadow-white'>0</div>
          <div className='px-[7%]   p-[4%] rounded-md bg-[#6f47be] text-white font-bold cursor-pointer shadow-md shadow-white'>=</div>
      </div>
      </div>
    </div>
    </div>
   
  )
}

export default Navbar
