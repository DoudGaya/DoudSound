
import banner2 from './assets/banner2.jpg'

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
  
  


export default function Features() {
    return (
        <div id='features' className=" md:h-[500px] bg-no-repeat bg-cover bg-center bg-fixed" style={{backgroundImage: `url(${banner2})`}}>
        <div className="py-[100px] px-6 md:px-[200px]">
    
          <div className="">
              Features
            </div>
            <div className=" flex flex-col md:flex-row justify-between  md:space-x-8  space-y-10 ">
                {singleSong}
            </div>
    
          </div>
       </div>
    )
}