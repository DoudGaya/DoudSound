import { useState } from "react"


export const Navigation = () => {

    const [nav, setNav] = useState(false)

    return (
        <>
        <div className="flex py-2 justify-center w-full ">

            <div className=" py-4 flex md:hidden w-full justify-between px-10">
                <div className="">
                    LOGO
                </div>
                <button className="">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
                    </svg>
                </button>
            </div>
           <div className=" hidden w-[1200px] md:flex justify-between py-6 mx-auto ">
               <a href="#" className="">
                    DoudSound
               </a>


               <div className="">
                <ul className=" flex space-x-10  ">
                    <li>
                        <a href="" className=" text-lg hover:underline">
                            About 
                        </a>
                    </li>
                    <li>
                        <a href="" className=" text-lg hover:underline">
                            Play List
                        </a>
                    </li>
                    <li>
                        <a href="" className=" text-lg hover:underline">
                            Album
                        </a>
                    </li>
                </ul>
               </div>
           </div>
        </div>
        </>
    )
}