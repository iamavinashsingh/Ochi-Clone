import React from 'react';
import myImage2 from '../assets/Designer.png';

function About() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-0.1" className='w-full  bg-[#CDEA68] rounded-t-3xl text-black font-["NeueMontreal"]'>
        <h1 className='p-[5vw] text-[3vw] leading-[3.5vw] tracking-tight'>
          Ochi is a strategic presentation agency for forward-thinking businesses that need to
          <u> raise funds, sell prod­ucts, ex­plain com­plex ideas </u> , and <u>hire great people</u>. 
        </h1>
        <div className='w-full border-t-[1px] p-[5vw] border-[#A2B663] flex gap-5'>
          <div className='w-1/2'>What you can expect:</div>
          <div className='w-1/2 flex gap-16'>
            <div className='w-1/2'>
              <div>We create tailored presentations to help you persuade your colleagues, clients, or investors. Whether it’s live or digital, delivered for one or a hundred people.</div>
              <div className='mt-[5vh] tracking-wide'>We believe the mix of strategy and design (with a bit of coffee) is what makes your message clear, convincing, and captivating.</div>
            </div>
            <div>
              <div className='w-1/2 pt-[9.5vh]'>S:</div>
              <div className='mt-[5vh]'><u>Instagram<br />Behance<br /> Facebook<br /> LinkedIN</u></div>
            </div>
          </div>
        </div>
        <div className='w-full border-t-[1px] px-[5vw] py-[3vh] flex gap-5 border-[#A2B663]'>
          <div className='w-1/2'>
            <h1 className='text-[4vw]'>Our approach :</h1>
            <button className='px-[1.5vw] py-[1vw] text-white bg-zinc-900 rounded-full mt-[3vh] flex gap-[3vw] items-center uppercase'>Read More
              <div className='w-[0.6vw] h-[0.6vw] bg-zinc-100 rounded-full '></div>
            </button>
          </div>
          <div className='w-1/2 h-[70vh] mt-[2vh] rounded-3xl bg-red-950'>
            <img src={myImage2} alt="My beautiful image" className="w-full h-full object-cover rounded-3xl" />
          </div>
        </div>
    </div>
  )
}

export default About