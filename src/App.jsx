import { useState } from 'react'
import { Navigation } from './Navigation'
import banner from './assets/banner.jpg'
import { useContext } from 'react'


function App() {
  const [play, setPlay] = useState(true)

  const updatePlay = () => {
    return setPlay( (prev) => !prev )
  }
 
  return (
   <>
   <div className=" text-white h-screen">
   <div className=" h-full bg-center bg-gradient-to-br from bg-purple-900/30 to-blue-900/30" style={{backgroundImage: `url(${banner})`}} >
   <Navigation />
     <div className=" bg-[rgb(171,28,169)]/40 h-2/4 grid items-center grid-cols-1 justify-center md:grid-cols-3">
      <div className=" flex items-center justify-center">
        <button onClick={updatePlay} className='h-[200px] group w-[200px] bg-[rgb(242,47,115)] p-4 group-hover:bg-purple-600 rounded-full'>
         <div className="w-full h-full flex group-hover:bg-[rgb(242,47,115)] items-center rounded-full justify-center  bg-[rgb(242,158,72)]">
         {

          play ?
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className=" group-hover:fill-blue-950 fill-[rgb(87,28,102)] w-[100px] h-[100px]">
              <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
            </svg> :

            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className=" group-hover:fill-blue-950 fill-[rgb(87,28,102)] w-[100px] h-[100px]">
            <path fillRule="evenodd" d="M6.75 5.25a.75.75 0 01.75-.75H9a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H7.5a.75.75 0 01-.75-.75V5.25zm7.5 0A.75.75 0 0115 4.5h1.5a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H15a.75.75 0 01-.75-.75V5.25z" clipRule="evenodd" />
            </svg>

         }

         </div>
        </button>
      </div>
      <div className=" col-span-2  bg-gradient-to-r  from-[rgb(87,28,102)]/70 to-pink-500/70 py-10 rounded-full md:rounded-none mx-6 md:rounded-l-full md:px-10">
        <p className='text-3xl sm:text-6xl md:text-6xl lg:text-8xl text-center font-black'> DoudSound</p>
      </div>
     </div>

     <div className=" w-full justify-center py-10 flex text-center px-4">
        <p className=" text-3xl md:text-4xl">Get Free Access to Millions of Musics Albums</p>
     </div>
   </div>
 
 
   <div className=" w-full grid grid-cols-2 px-[200px] bg-yellow-300">
    
   </div>
   </div>
   </>
  )
}

export default App
