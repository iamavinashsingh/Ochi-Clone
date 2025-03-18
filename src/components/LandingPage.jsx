import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";
import myImage from '../assets/image01.jpg';
import { motion } from 'framer-motion';

function LandingPage() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-0.3" className='w-full h-screen bg-zinc-900 pt-2'>
        <div className='textstructure mt-40 px-[5vw]'>
            {["We Create","Eye Opening","Presentations"].map((item, index)=>{
                return (
                <div className='masker'>
                  <div className='w-fit flex items-center'>
                    {index === 1 && (<motion.div 
                        initial={{width:0}} 
                        animate={{width:"7vw"}}
                        transition={{ease:[0.76,0,0.24,1] , duration:1}}
                        className='w-[7vw]  h-[5.3vw] bg-green-500 relative top-[0.45vw] rounded-md'>
                        <img src={myImage} alt="Ochi Logo" className="w-full h-full object-cover rounded-md" />
                    </motion.div>)}
                    <h1 className='flex items-center h-full uppercase text-[9vw]  leading-[6.5vw]  font-["FoundersGrotesk"]'>{item}</h1>
                  </div>                
                </div>
                );
           })}
        </div>
        <div className='border-t-[1px] border-zinc-800 mt-[7vw] flex justify-between items-center py-[2vw] px-[5vw]'>
                    {["For public and private companies","From the first pitch to IPO"].map((item , index)=>
                    (<p className='text-md font-light tracking-tight leading-none'>{item}</p>))}
          <div className='start flex items-center gap-5' >
            <div className='px-[2vw] py-[1vw] border-[1px] border-zinc-300 rounded-full font-light text-md uppercase'>Start the project</div>
            <div className='w-[3.5vw] h-[3.5vw] border-[1px] border-zinc-300 flex items-center justify-center rounded-full'>
              
              <span className='rotate-[45deg]'><FaArrowUpLong /></span>
              </div>         
          </div>        
        </div>
    </div>
  )
}

export default LandingPage