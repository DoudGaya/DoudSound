import me from './assets/me2.jpg'

const About = () => {
    return (
        <div id='about' className="w-full grid  grid-cols-1 md:grid-cols-2  px-10 md:px-[200px] ">
        <div className="flex flex-col py-[60px] space-y-20 md:px-10 ">
         
         <div className=" flex flex-col space-y-10 md:space-y-16 ">
            <p className=' text-4xl border-b pb-4'>About ME</p>
            <p className=' text-2xl'>My Name is <span className=' font-bold'>Abdulrahman Dauda Gaya</span>. This is my portfolio project for the ALX Software Engineering Program, I chose to create this music app because I'm inspired with the way spotify a changing the world of music. I love <span className=' text-emerald-400 font-bold'>Spotify</span> and Everything about it. So I've decided to make my own music app and add some more features to make it feel and look good</p>
         </div>

         <div className=" flex flex-col">
          <div className=" flex flex-row justify-between border border-white py-4 rounded-2xl px-6 md:px-16">
    
            <button className=' px-3'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className=" w-10 h-10 ">
                <path d="M9.195 18.44c1.25.713 2.805-.19 2.805-1.629v-2.34l6.945 3.968c1.25.714 2.805-.188 2.805-1.628V8.688c0-1.44-1.555-2.342-2.805-1.628L12 11.03v-2.34c0-1.44-1.555-2.343-2.805-1.629l-7.108 4.062c-1.26.72-1.26 2.536 0 3.256l7.108 4.061z" />
              </svg>
            </button>
           
            <button className=' w-20 h-20 border border-white flex items-center justify-center rounded-full'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className=" w-10 h-10 ">
                <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
              </svg>
            </button>
            
            <button className=' px-3'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className=" w-10 h-10 transform rotate-180 ">
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
    )
}

export default About