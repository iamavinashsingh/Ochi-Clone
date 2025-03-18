import { motion } from 'framer-motion';
import React from 'react';

function Marquee() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="0.05" className='w-full py-[6vw] rounded-t-3xl bg-[#004D43]'>
      <div className='text border-t-2 border-b-2 border-zinc-300 font-["FoundersGrotesk"] font-light flex  overflow-hidden whitespace-nowrap '>
        <motion.h1 initial={{ x: 0 }} animate={{ x: "-100%" }} transition={{ ease: "linear", repeat: Infinity, duration: 10, }} className='text-[22vw] leading-none pr-[3vw]'> WE ARE OCHI</motion.h1>
        <motion.h1 initial={{ x: 0 }} animate={{ x: "-100%" }} transition={{ ease: "linear", repeat: Infinity, duration: 10, }} className='text-[22vw] leading-none pr-[3vw]'> WE ARE OCHI</motion.h1>
        <motion.h1 initial={{ x: 0 }} animate={{ x: "-100%" }} transition={{ ease: "linear", repeat: Infinity, duration: 10, }} className='text-[22vw] leading-none pr-[3vw]'> WE ARE OCHI</motion.h1>
      </div>
    </div>
  );
}

export default Marquee;
