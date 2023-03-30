import mine from './assets/mine.png'

const AboutMe = () => {
    return (
        <>
        <div className=" flex md:space-x-6 space-x-0 flex-col md:flex-row w-[1000px] py-[100px] mx-auto " id='abdulrahman'>
            <img src={mine} alt="" className=' flex-none rounded-full object-cover object-center h-[300px] w-[300px]' sizes="" srcset="" />
            <div className=" flex flex-col w-full justify-center">
                <p className=' text-3xl text-purple-200'>Frontend Engineer</p>
                <p className=' text-5xl'>Abdulrahman Dauda Gaya</p>

            </div>
        </div>
        </>
    )
}

export default AboutMe