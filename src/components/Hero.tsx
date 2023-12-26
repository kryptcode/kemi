import Image from 'next/image'
import heroImg from '../../unnamed.jpg'
import { inter } from '@/lib/fonts'
import { IoGlassesOutline } from 'react-icons/io5'
import { HiOutlineSpeakerWave } from "react-icons/hi2";

const Hero = () => {
  return (
    <div className=''>
        <div className="w-[90%] mx-auto flex justify-between relative py-7">
            <div className='flex-[1.3] '></div>
            <div className='flex-1 overflow-hidden border-4 w-full border-black'>
                <Image src={heroImg} alt="" className='w-full hover:scale-110 transition-all duration-500 ease-linear' />
            </div>

            <div className='absolute top-1/4 z-10 lg:w-[60%]'>
                <div className=''>
                    <h1 className={`text-8xl font-bold mb-8 uppercase text-[#0093A9] ${inter.className}`}>Adekemi <br /> 
                    <span className='text-black'>Adeyombo</span>
                     </h1>
                </div>
                <p className='text-2xl font-light'>
                    
                    <span className='flex space-x-3 items-center.'>
                    Hi! I'm  Kemi.
                    <div className='h-8 w-8 flex items-center justify-center hover:bg-[#0093A9] cursor-pointer transition-all ease-in-out duration-300 rounded-full '>
                        <HiOutlineSpeakerWave className='text-lg' />
                    </div>
                    </span>
                </p>
                <p className="text-2xl py-5 pr-10 font-extralight  bg-[#eae8e0] border-r-4 border-black">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati delectus architecto ducimus laudantium quos optio dolorem vero odio eius debitis eaque nesciunt ea, et aut temporibus deleniti dolor corrupti dolores beatae ab culpa voluptatum, repellendus, aspernatur autem. Consectetur, non iure!
                </p>
            </div>
        <IoGlassesOutline className='text-8xl absolute left-1/3 opacity-5' />
        </div>

    </div>
  )
}

export default Hero