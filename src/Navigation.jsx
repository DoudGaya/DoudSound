import { useState } from "react"
import { HashLink } from "react-router-hash-link"
import { Link } from "react-router-dom"


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

                    <HashLink smooth to="#about" className=" text-lg hover:underline">
                        About 
                    </HashLink>

                    </li>
                    <li>
                    <HashLink smooth to="#features" className=" text-lg hover:underline">
                        Features 
                    </HashLink>
                    </li>
                    <li>
                    <HashLink smooth to="#abdulrahman" className=" text-lg hover:underline">
                        About ME
                    </HashLink>
                    </li>
                </ul>
               </div>
           </div>
        </div>
        </>
    )
}