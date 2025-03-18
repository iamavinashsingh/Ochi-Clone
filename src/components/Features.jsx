import { motion, useAnimate, useAnimation } from 'framer-motion'
import React from 'react'

function Features() {
    const cards = [useAnimation(),useAnimation(),useAnimation(),useAnimation()];

    const handleHover = (index)=>{
        cards[index].start({y:"0"})
    }
    const setHover = (index)=>{
        cards[index].start({y:"100%"})
    }
  return (
    <div className='w-full py-[5vh]'>
        <div className='w-full px-[5vw] border-b-[1px] border-zinc-700 pb-[5vh]'>
            <h1 className='text-[4vw] font-["NeueMontreal"] tracking-tight'>Featured Projects</h1>
        </div>
        <div className="px-[5vw]">
            <div className="cards w-full flex gap-10 h-[75vh] mt-[5vh]">
                <motion.div 
                    onHoverStart={()=>handleHover(0)} 
                    onHoverEnd={()=>setHover(0)} 
                    className="cardContainer relative   w-1/2 h-[75vh]">
                        <h1 className='absolute flex overflow-hidden text-[#CDEA68] left-full -translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] text-[9vw] -pb-[5vw] whitespace-nowrap font-["FoundersGrotesk"] leading-none'>{"CARDBOARD SPACESHIP".split('').map((item,index)=>
                            <motion.span initial={{y:"100%"}} animate={cards[0]} transition={{ease :[0.22,1,0.36,1], delay: index*0.02}}>{item}</motion.span>)}</h1>
                        <div className='w-full h-full rounded-xl  overflow-hidden'>
                            <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-663x551.png"></img>
                        </div>
                </motion.div>
                <motion.div 
                    onHoverStart={()=>handleHover(1)} 
                    onHoverEnd={()=>setHover(1)} 
                    className="cardContainer  relative w-1/2 h-[75vh]">
                    <h1 className='absolute flex overflow-hidden text-[#CDEA68] right-full translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] text-[9vw] -pb-[5vw] whitespace-nowrap font-["FoundersGrotesk"] leading-none'>{"AH2 & MATT HORN".split('').map((item,index)=>
                        <motion.span initial={{y:"100%"}} animate={cards[1]} transition={{ease :[0.22,1,0.36,1], delay: index*0.02}} >{item}</motion.span>)}</h1>
                    <div className='w-full h-full rounded-xl overflow-hidden'>
                        <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2024/08/Frame-481692-1-663x551.png"></img>
                    </div>
                </motion.div>
            </div>

            <div className="cards w-full flex gap-10 h-[75vh] mt-[5vh]">
                <motion.div 
                    onHoverStart={()=>handleHover(2)} 
                    onHoverEnd={()=>setHover(2)}
                    className="cardContainer relative  w-1/2 h-[75vh]">                        
                    <h1 className='absolute flex overflow-hidden text-[#CDEA68] left-full -translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] text-[9vw] -pb-[5vw] whitespace-nowrap font-["FoundersGrotesk"] leading-none'>{"FYDE".split('').map((item,index) =>
                         <motion.span initial={{y:"100%"}} animate={cards[2]} transition={{ease :[0.22,1,0.36,1], delay: index*0.05}}>{item}</motion.span>)}</h1>
                    <div className='w-full h-full rounded-xl  overflow-hidden'>
                        <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"></img>
                    </div>
                </motion.div>
                <motion.div  
                onHoverStart={()=>handleHover(3)} 
                onHoverEnd={()=>setHover(3)}
                className="cardContainer relative w-1/2 h-[75vh]">
                <h1 className='absolute flex overflow-hidden text-[#CDEA68] right-full translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] text-[9vw] -pb-[5vw] whitespace-nowrap font-["FoundersGrotesk"] leading-none'>{"VISE".split('').map((item,index)=>
                    <motion.span initial={{y:"100%"}} animate={cards[3]} transition={{ease :[0.22,1,0.36,1], delay: index*0.05}}>{item}</motion.span>)}</h1>
                    <div className='w-full h-full rounded-xl overflow-hidden'>
                        <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2024/08/Frame-481692-1-663x551.png"></img>
                    </div>
                </motion.div>
                
            </div>
        </div>
            

    </div>
  )
}

export default Features