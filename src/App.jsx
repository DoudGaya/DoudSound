import { useState } from 'react'
import { Navigation } from './Navigation'
import banner from './assets/banner.jpg'
import me from './assets/me2.jpg'
import banner2 from './assets/banner2.jpg'

import { useContext } from 'react'


const musicLists = [
  {
    id: 1,
    name: "Song Name",
    genre: "Blues",
    cover: ''
  },

  {
    id: 1,
    name: "Song Name",
    genre: "Soft ",
    cover: ''
  },

  {
    id: 1,
    name: "Song Name",
    genre: "Hip Hop",
    cover: ''
  },

  {
    id: 1,
    name: "Song Name",
    genre: "Rogue",
    cover: ''
  }
]


const Songs = ({song}) => {
  return (
    <>
    <div className="bg-[rgb(171,28,169)]/40 rounded-2xl flex flex-col w-full">
      <div className=" p-6 ">
        <div className=" bg-black/40 rounded-2xl cursor-pointer max-w-max px-4 py-4">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-20 hover:stroke-[rgb(255,181,254)]  h-20">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 7.5l16.5-4.125M12 6.75c-2.708 0-5.363.224-7.948.655C2.999 7.58 2.25 8.507 2.25 9.574v9.176A2.25 2.25 0 004.5 21h15a2.25 2.25 0 002.25-2.25V9.574c0-1.067-.75-1.994-1.802-2.169A48.329 48.329 0 0012 6.75zm-1.683 6.443l-.005.005-.006-.005.006-.005.005.005zm-.005 2.127l-.005-.006.005-.005.005.005-.005.005zm-2.116-.006l-.005.006-.006-.006.005-.005.006.005zm-.005-2.116l-.006-.005.006-.005.005.005-.005.005zM9.255 10.5v.008h-.008V10.5h.008zm3.249 1.88l-.007.004-.003-.007.006-.003.004.006zm-1.38 5.126l-.003-.006.006-.004.004.007-.006.003zm.007-6.501l-.003.006-.007-.003.004-.007.006.004zm1.37 5.129l-.007-.004.004-.006.006.003-.004.007zm.504-1.877h-.008v-.007h.008v.007zM9.255 18v.008h-.008V18h.008zm-3.246-1.87l-.007.004L6 16.127l.006-.003.004.006zm1.366-5.119l-.004-.006.006-.004.004.007-.006.003zM7.38 17.5l-.003.006-.007-.003.004-.007.006.004zm-1.376-5.116L6 12.38l.003-.007.007.004-.004.007zm-.5 1.873h-.008v-.007h.008v.007zM17.25 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zm0 4.5a.75.75 0 110-1.5.75.75 0 010 1.5z" />
          </svg>
        </div>
        <p className=' text-lg font-bold'>{song.name}</p>
        <p className=' text-lg'>{song.genre}</p>
      </div>
    </div>
    </>
  )
}


const singleSong = musicLists.map( song => <Songs key={song.id} song={song} />)


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
        <p className='text-3xl sm:text-6xl md:text-6xl lg:text-8xl text-center font-black'>I love you Amera</p>
      </div>
     </div>

     <div className=" w-full justify-center py-10 flex text-center px-4">
        <p className=" text-3xl md:text-4xl">Get Free Access to Millions of Musics Albums</p>
     </div>
   </div>
 
 
   <div className="w-full grid grid-cols-2 px-[200px] ">
    <div className="flex flex-col py-[60px] space-y-20 px-10 ">
     
     <div className=" flex flex-col space-y-16 ">
        <p className=' text-4xl'>About ME</p>
        <p className=' text-2xl'>My Name is Abdulrahman Dauda Gaya and This is my portfolio project for the ALX Software Engineering Program</p>
     </div>
   
   
     <div className=" flex flex-col">
      <div className=" flex flex-row justify-between bg-purple-400/30 py-4 rounded-2xl px-16">

        <button className=' px-3'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class=" w-10 h-10 ">
            <path d="M9.195 18.44c1.25.713 2.805-.19 2.805-1.629v-2.34l6.945 3.968c1.25.714 2.805-.188 2.805-1.628V8.688c0-1.44-1.555-2.342-2.805-1.628L12 11.03v-2.34c0-1.44-1.555-2.343-2.805-1.629l-7.108 4.062c-1.26.72-1.26 2.536 0 3.256l7.108 4.061z" />
          </svg>
        </button>
       
        <button className=' w-20 h-20 bg-blue-400 flex items-center justify-center rounded-full'>
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
    <div className="  py-20">
      <div className=" w-1/2  mx-auto h-full">
        <img src={me} alt="Abdulrahman Dauda" className=' grayscale hover:grayscale-0 cursor-pointer rounded-lg' />
      </div>
    </div>
   </div>


   <div className=" bg-pink-300 h-[500px] bg-no-repeat bg-cover bg-center bg-fixed" style={{backgroundImage: `url(${banner2})`}}>
    <div className=" flex flex-row justify-between px-[200px] space-x-8 py-[100px]">
        {singleSong}
    </div>
   </div>
   </div>
   </>
  )
}

export default App
