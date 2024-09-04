import React from 'react'
import { FaCss3Alt, FaHtml5, FaJsSquare} from 'react-icons/fa'

const Navbar = () => {
  return (
    <div className='flex justify-center items-center min-h-screen bg-gray-300 flex-col'>
      <h1 className='text-center font-bold m-b2 text-3xl'>Simple Calculator</h1>
      <h2 className='text-center font-bold m-b2 text-xl pb-2'>Using Javascript</h2>
     <div className='flex flex-col space-x-4'>
      <div className='flex space-x-4 gap-2  justify-center items-center text-center'>
        <span className='font-bold pl-5'>Html</span>
        <span className='font-bold pl-5'>Css</span>
        <span className='font-bold pl-5'>Javascript</span>
      </div>
      <div className='flex space-x-4 gap-4 pb-4'>
      <FaHtml5 className='text-red-600 text-5xl flex'/>
      <FaCss3Alt className='text-blue-600 text-5xl'/>
      <FaJsSquare className='text-yellow-600 text-5xl'/>
      </div>
     </div>
    <div className='bg-black rounded-lg p-2'>
     <div className='max-w-lg mx-auto bg-black w-full p-4 rounded-lg shadow-lg'>
      <div className='bg-white text-right text-3xl mb-4 p-4 text-black rounded'>0</div>
     </div>
    <div className='grid grid-cols-4 gap-2 md-grid-col-2 rounded-lg'>
      <button className='bg-[#cc6536] rounded p-4'>oFF</button>
      <button className='bg-[#6f47be] rounded p-4'>(</button>
      <button  className='bg-[#6f47be] rounded p-4'>)</button>
      <button  className='bg-[#6f47be] rounded p-4'>/</button>

      <button  className='bg-[#6f47be] rounded p-4'>9</button>
      <button  className='bg-[#6f47be] rounded p-4'>8</button>
      <button  className='bg-[#6f47be] rounded p-4'>7</button>
      <button  className='bg-[#6f47be] rounded p-4'>*</button>

      <button  className='bg-[#6f47be] rounded p-4'>6</button>
      <button  className='bg-[#6f47be] rounded p-4'>5</button>
      <button className='bg-[#6f47be] rounded p-4'>3</button>
      <button  className='bg-[#6f47be] rounded p-4'>-</button>

      <button  className='bg-[#6f47be] rounded p-4'>3</button>
      <button  className='bg-[#6f47be] rounded p-4'>2</button>
      <button  className='bg-[#6f47be] rounded p-4'>1</button>
      <button  className='bg-[#6f47be] rounded p-4'>+</button>

      <button  className='bg-[#ce3e5c] rounded p-4'>Del</button>
      <button  className='bg-[#6f47be] rounded p-4'>.</button>
      <button  className='bg-[#6f47be] rounded p-4'>0</button>
      <button  className='bg-[#6f47be] rounded p-4'>=</button>
    </div>
    </div>
    </div>
  )
}

export default Navbar
