import React, {useState} from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'

const Navbar = () => {
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }

  return (
    <div className='flex justify-between items-center h-20 max-w-[1240px] mx-auto px-4 text-black'>
        <h1 className='w-full text-3xl font-bold text-[#3d4246]'>
            LINDSEY FINCH ART
        </h1>
        <ul className='hidden md:flex'>
            <li className='p-4'>Home</li>
            <li className='p-4'>About</li>
            <li className='p-4'>Gallery</li>
            <li className='p-4'>Shop</li>
            <li className='p-4'>Pets</li>
            <li className='p-4'>Weddings</li>
            <li className='p-4'>Travel</li>
            <li className='p-4'>Events</li>
            <li className='p-4'>Contact</li>
        </ul>
        <div onClick={handleNav} className='block md:hidden'>
            {!nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
        </div>
        <div className={!nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-[#c1c1c1] bg-[#ffffff] ease-in-out duration-500' : 'fixed left-[-100%]'}>
        <h1 className='w-full text-3xl font-bold text-[#3d4246] m-4'>
            LINDSEY FINCH ART
        </h1>
        <ul className='p-4'>
            <li className='p-4 border-b'>Home</li>
            <li className='p-4 border-b'>About</li>
            <li className='p-4 border-b'>Gallery</li>
            <li className='p-4 border-b'>Shop</li>
            <li className='p-4 border-b'>Pets</li>
            <li className='p-4 border-b'>Weddings</li>
            <li className='p-4 border-b'>Travel</li>
            <li className='p-4 border-b'>Events</li>
            <li className='p-4 border-b'>Contact</li>
        </ul>
        </div>
    </div>
  )
}

export default Navbar