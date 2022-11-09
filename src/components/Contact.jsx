import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#1D1F1C] flex justify-center items-center p-4'>
        <form method='POST' action="https://getform.io/f/9d14278a-f407-443f-9eeb-e265d3f222bd" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-yellow-600 text-white'>Contact</p>
                <p className='text-white py-4'>// Submit the form below or send me an email - adilet.zhusupov@gmail.com</p>
            </div>
            <input className='bg-[#text-white] p-2' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#text-white]' type="email" placeholder='Email' name='email' />
            <textarea className='bg-[#text-white] p-2' name="message" rows="10" placeholder='Message'></textarea>
            <button className='text-white border-2 hover:bg-yellow-600 hover:border-yellow-600 px-4 py-3 my-8 mx-auto flex items-center'>Send Message</button>
        </form>
    </div>
  )
}

export default Contact