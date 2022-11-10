import React, { useState } from 'react';
/* eslint-disable */
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
} from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import Logo from '../assets/logo.png';
import cv from '../assets/cv/adilet-zhusupov-cv.pdf';
// import { Link } from 'react-scroll';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#1D1F1C] text-white'>
      <div>
        <img src={Logo} alt='Logo Image' style={{ width: '160px' }} />
      </div>

      {/* menu */}
      <ul className='hidden md:flex'>
        <li>
          <a className='text-yellow-600' href='/'>Home</a>
        </li>
        <li>
          <a className='text-yellow-600' href='/about'>About</a>
        </li>
        <li>
          <a className='text-yellow-600' href='/skills'>Skills</a>
        </li>
        <li>
          <a className='text-yellow-600' href='/work'>Work</a>
        </li>
        <li>
          <a className='text-yellow-600' href='/contact'>Contact</a>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars className='hover:text-yellow-600'/> : <FaTimes className='hover:text-yellow-600'/>}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen bg-[#1D1F1C] flex flex-col justify-center items-center'
        }
      >
        <li className='py-6 text-4xl'>
          {/* <Link onClick={handleClick} to='home' smooth={true} duration={500} className='hover:text-yellow-600'>
            Home
          </Link> */}
          <a href='/' className='hover:text-yellow-600'>Home</a>
        </li>
        <li className='py-6 text-4xl'>
          {/* <Link onClick={handleClick} to='about' smooth={true} duration={500} className='hover:text-yellow-600'>
            About
          </Link> */}
          <a href='/about' className='hover:text-yellow-600'>About</a>
        </li>
        <li className='py-6 text-4xl'>
          {/* <Link onClick={handleClick} to='skills' smooth={true} duration={500} className='hover:text-yellow-600'>
            Skills
          </Link> */}
          <a href='/skills' className='hover:text-yellow-600'>Skills</a>
        </li>
        <li className='py-6 text-4xl'>
          {/* <Link onClick={handleClick} to='work' smooth={true} duration={500} className='hover:text-yellow-600'>
            Work
          </Link> */}
          <a href='/work' className='hover:text-yellow-600'>Work</a>
        </li>
        <li className='py-6 text-4xl'>
          {/* <Link onClick={handleClick} to='contact' smooth={true} duration={500} className='hover:text-yellow-600'>
            Contact
          </Link> */}
          <a href='/contact' className='hover:text-yellow-600'>Contact</a>
        </li>
      </ul>

      {/* Social icons */}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
            <a
              className='flex justify-between items-center w-full text-white'
              href='https://www.linkedin.com/in/adilet-zhusupov-59a2b7256/' target='blank'
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
            <a
              className='flex justify-between items-center w-full text-white'
              href='https://github.com/AdiletZhusupov'
              target='blank'
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
            <a
              className='flex justify-between items-center w-full text-white'
              href={cv} target='blank'
            >
              Resume <BsFillPersonLinesFill size={30}/>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
