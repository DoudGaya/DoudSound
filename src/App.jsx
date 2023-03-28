import { useState } from 'react'
import { Navigation } from './Navigation'
import banner from './assets/banner.jpg'


function App() {

  return (
   <>
   <div className=" text-white h-screen">
   <div className=" h-full bg-center bg-gradient-to-br from bg-purple-900/30 to-blue-900/30" style={{backgroundImage: `url(${banner})`}} >
   <Navigation />
     <div className=" bg-[rgb(171,28,169)]/40 h-2/4 grid items-center grid-cols-1 justify-center md:grid-cols-3">
      <div className=" flex items-center justify-center">
        <button className='h-[200px] group w-[200px] bg-[rgb(242,47,115)] p-4 group-hover:bg-purple-600 rounded-full'>
         <div className="w-full h-full flex group-hover:bg-[rgb(242,47,115)] items-center rounded-full justify-center  bg-[rgb(242,158,72)]">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className=" group-hover:fill-blue-950 fill-[rgb(87,28,102)] w-[100px] h-[100px]">
              <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
            </svg>
         </div>
        </button>
      </div>
      <div className=" col-span-2 bg-[rgb(87,28,102)]/70 py-10 rounded-l-full px-10">
        <p className=' text-4xl md:text-8xl font-black'> DoudSound</p>
      </div>
     </div>

     <div className=" w-full justify-center py-10 flex text-center">
     <p className=" text-4xl">Get Free Access to Millions of Musics Albums</p>
     </div>
   </div>
   </div>
   </>
  )
}

export default App
