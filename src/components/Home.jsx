import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#1D1F1C]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-yellow-600'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-white'>
          {'adilet zhusupov'.toUpperCase()}
        </h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-white'>
          I'm a Front-End Developer.
        </h2>
        <p className='text-white py-4 max-w-[700px]'>
        I'm a Front-End Developer who is passionate about learning new technologies, creating functional, user-friendly websites and bringing products to life. Check out my work below and feel free to get in touch if you want to work with me.
        </p>
        <div>
          <Link to='work' smooth={true} duration={500}>
            <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-yellow-600 hover:border-yellow-600'>
              View Work
              <span className='group-hover:rotate-90 duration-300'>
                <HiArrowNarrowRight className='ml-3 ' />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
