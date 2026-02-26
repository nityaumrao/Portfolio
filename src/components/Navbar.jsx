import React , {useState} from "react";
import { FaBars,FaTimes,FaGithub, FaLinkedin,} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { Link } from "react-scroll";
const Navbar = ()=>{
    const [nav , setNav]=useState(false);
    const handleClick = () => setNav(!nav);

    return(
        <div className='fixed w-full h-20 flex justify-between items-center px-4 bg-slate-900 text-gray-300'>
            NITYA UMRAO 
            <div className='fixed w-full h-20 flex justify-between items-center px-4 bg-slate-900 text-gray-300'></div>
            <ul className='hidden md:flex gap-x-8'>
        <li>
          <Link to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        {/* ... other menu items ... */}
      </ul>
      <div onClick={handleClick} className='md:hidden z-10 cursor-pointer'>
        {!nav ? <FaBars size={20} /> : <FaTimes size={20} />}
      </div>
      <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-slate-900 flex flex-col justify-center items-center'}>
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        {/* ... other mobile menu items ... */}
      </ul>
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          {/* LinkedIn - sliding animation on hover */}
          <li className='w-40 h-14 flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
            <a href="https://linkedin.com" className='flex justify-between items-center w-full text-gray-300 px-4'>
              LinkedIn <FaLinkedin size={30} />
            </a>
          </li>
          {/* ... other social links ... */}
        </ul>
      </div>
    
        </div>
    );
};
export default Navbar