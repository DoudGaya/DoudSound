import { useState } from 'react'
import { Navigation } from './Navigation'
import banner from './assets/banner.jpg'
import me from './assets/me2.jpg'
import banner2 from './assets/banner2.jpg'

import { useContext } from 'react'


const features = [
  {
    id: 1,
    name: "Music Player with access to millions of songs globally",

  },

  {
    id: 2,
    name: "Ability to search for audio and filter results ",

  },

  {
    id: 3,
    name: "Ability to add song to favorite or save audio for feature use",

  },

  {
    id: 4,
    name: "Ability to view filter song or album by artist or music title",

  }
]


const Songs = ({song}) => {
  return (
    <>
    <div className="bg-stone-700/50  backdrop-blur-sm rounded-2xl flex  w-full">
      <div className=" flex flex-col space-y-6 p-6 ">
        <div className=" bg-black/40 text-3xl w-16 h-16 flex items-center justify-center rounded-2xl p-4 cursor-pointer ">
          {song.id}
        </div>
        <p className=' text-lg font-bold'>{song.name}</p>
      </div>
    </div>
    </>
  )
}


const singleSong = features.map( song => <Songs key={song.id} song={song} />)


function App() {
  const [play, setPlay] = useState(true)

  const updatePlay = () => {
    return setPlay((prev) => !prev )
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
        <p className='text-3xl sm:text-6xl md:text-6xl lg:text-8xl text-center font-black'>{ play? 'DoudSound' : 'Meros' }</p>
      </div>
     </div>

     <div className=" w-full justify-center py-10 flex text-center px-4">
        <p className=" text-3xl md:text-4xl">Get Free Access to Millions of Musics Albums</p>
     </div>
   </div>
 
 
   <div className="w-full grid  grid-cols-1 md:grid-cols-2 px-10 md:px-[200px] ">
    <div className="flex flex-col py-[60px] space-y-20 md:px-10 ">
     
     <div className=" flex flex-col space-y-10 md:space-y-16 ">
        <p className=' text-4xl border-b pb-4'>About ME</p>
        <p className=' text-2xl'>My Name is <span className=' font-bold'>Abdulrahman Dauda Gaya</span>. This is my portfolio project for the ALX Software Engineering Program, I chose to create this music app because I'm inspired with the way spotify a changing the world of music. I love <span className=' text-emerald-400 font-bold'>Spotify</span> and Everything about it. So I've decided to make my own music app and add some more features to make it feel and look good</p>
     </div>
   
   
     <div className=" flex flex-col">
      <div className=" flex flex-row justify-between border border-white py-4 rounded-2xl px-6 md:px-16">

        <button className=' px-3'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class=" w-10 h-10 ">
            <path d="M9.195 18.44c1.25.713 2.805-.19 2.805-1.629v-2.34l6.945 3.968c1.25.714 2.805-.188 2.805-1.628V8.688c0-1.44-1.555-2.342-2.805-1.628L12 11.03v-2.34c0-1.44-1.555-2.343-2.805-1.629l-7.108 4.062c-1.26.72-1.26 2.536 0 3.256l7.108 4.061z" />
          </svg>
        </button>
       
        <button className=' w-20 h-20 border border-white flex items-center justify-center rounded-full'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className=" w-10 h-10 ">
            <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
          </svg>
        </button>
        
        <button className=' px-3'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class=" w-10 h-10 transform rotate-180 ">
            <path d="M9.195 18.44c1.25.713 2.805-.19 2.805-1.629v-2.34l6.945 3.968c1.25.714 2.805-.188 2.805-1.628V8.688c0-1.44-1.555-2.342-2.805-1.628L12 11.03v-2.34c0-1.44-1.555-2.343-2.805-1.629l-7.108 4.062c-1.26.72-1.26 2.536 0 3.256l7.108 4.061z" />
          </svg>
        </button>

      </div>

     </div>
    </div>
    <div className=" md:py-20 py-6">
      <div className=" w-full lg:px-20 flex items-center justify-center mx-auto h-full">
        <img src={me} alt="Abdulrahman Dauda" className=' grayscale hover:grayscale-0 cursor-pointer rounded-lg' />
      </div>
    </div>
   </div>


   <div className=" md:h-[500px] bg-no-repeat bg-cover bg-center bg-fixed" style={{backgroundImage: `url(${banner2})`}}>
   
   
   <div className="py-[100px] px-6 md:px-[200px]">

    <div className="">
        Features
      </div>
      <div className=" flex flex-col md:flex-row justify-between  md:space-x-8  space-y-10 ">
          {singleSong}
      </div>

   </div>
   </div>
   </div>
   </>
  )
}

export default App
