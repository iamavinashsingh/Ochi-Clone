import React from 'react'

function Cards() {
  return (
    <div className='w-full h-screen p-[5vw] flex items-center gap-10'>
        <div className='cardContainer w-1/2 h-[50vh] '>
            <div className='card relative w-full h-full bg-[#004d43] rounded-3xl flex items-center justify-center'>
              <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
              <button className='px-[0.7vw] py-[0.5vh] absolute left-10 bottom-9 border-zinc-200 border-[1px] rounded-full tracking-wider text-[0.8vw]'>©2019-2024</button>
            </div>
        </div>
        <div className='cardContainer w-1/2 h-[50vh] flex gap-5'>
            <div className='relative w-1/2 h-full bg-[#212121] rounded-3xl flex items-center justify-center'>
              <img src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
              <button className='px-[0.7vw] py-[0.5vh] absolute left-10 bottom-9 border-zinc-200 border-[1px] rounded-full  whitespace-nowrap text-[0.8vw]'>RATING 5.0 ON CLUTCH</button>
            </div>
            <div className='relative w-1/2 h-full bg-[#212121] rounded-3xl flex items-center justify-center'>
              <img src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
              <button className='px-[0.7vw] py-[0.5vh] absolute left-10 bottom-9 border-zinc-200 border-[1px] rounded-full text-[0.8vw]'>BUSINESS BOOTCAMP ALUMNI</button>
            </div>
        </div>
    </div>
  )
}

export default Cards