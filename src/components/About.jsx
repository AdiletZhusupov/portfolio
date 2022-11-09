import React from 'react';
import me from '../assets/me/me2.jpg';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#1D1F1C] text-white'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-yellow-600'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='shadow-md shadow-[#040c16]'>
              <img src={me} alt='my pic'/>
            </div>
            <div className='flex justify-between items-center'>
              <p>I am an enthusiastic developer with a passion for discovering new coding perspectives. My main experience is building websites and web applications using HTML, CSS, JavaScript and React. I realize that Web Development is fast-growing and modern industry and therefore I strive to learn more and develop new skills. For instance, at this moment in time I'm learning Gatsby - a React-based framework and Tailwind - a CSS framework.<br/> <br/>Learning to code is challenging, time and energy consuming journey, however, it is also rewarding, mentally stimulating and fun.</p>
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;
