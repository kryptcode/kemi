"use client"
import Image from 'next/image'
import heroImg from '../../unnamed.jpg'
import { dm_serif, inter } from '@/lib/fonts'
import { IoGlassesOutline } from 'react-icons/io5'
import { HiOutlineSpeakerWave } from "react-icons/hi2";
import 'animate.css';

const Hero = () => {
  return (
    <div className='mb-16'>
        <div className="w-[90%] mx-auto flex flex-col lg:flex-row justify-between relative py-7">
            <div className='flex-[1.3] '></div>
            <div className='flex-1 overflow-hidden w-full group relative'>
                <Image src={heroImg} alt="" className='w-full group-hover:scale-110 transition-all duration-500 ease-linear' />
                <div className='h-full w-full absolute bg-black/25 group-hover:bg-none top-0 left-0 right-0 bottom-0' />
            </div>

            

            <div className='hidden lg:block absolute top-[10%] z-10 lg:w-[50%] animate__animated animate__fadeInLeft'>
                <div className=''>
                    <div className={` ${dm_serif.className} flex space-x-1 items-end`}>
                        <span className='text-[20rem] leading-none '>A</span>
                        <div className='flex flex-col text-7xl lg:pb-10'>
                            <span className='text-[#0093A9]'>dekemi</span>
                            <span className=''>deyombo</span>
                        </div>
                    </div>
                    {/* <h1 className={`text-8xl font-bold mb-8  text-[#0093A9] ${dm_serif.className}`}>Adekemi {' '}
                    <span className='text-black'>Adeyombo</span>
                     </h1> */}
                </div>
                <p className='text-2xl font-light'>
                    
                    <span className='flex space-x-3 items-center.'>
                    Hi! I'm  Kemi.
                    <div className='h-8 w-8 flex items-center justify-center hover:bg-[#0093A9] cursor-pointer transition-all ease-in-out duration-300 rounded-full '>
                        <HiOutlineSpeakerWave className='text-lg' />
                    </div>
                    </span>
                </p>
                <p className="text-2xl py-5 pr-10 font-extralight  bg-[#eae8e0] ">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati delectus architecto ducimus laudantium quos optio dolorem vero odio eius debitis eaque nesciunt ea, et aut temporibus deleniti dolor corrupti dolores beatae ab culpa voluptatum, repellendus, aspernatur autem. Consectetur, non iure!
                </p>
            </div>

            <div className='lg:hidden pt-10'>
                <p className='text-2xl font-light'>
                    <span className='flex space-x-3 items-center.'>
                    Hi! I'm  Kemi.
                    <div className='h-8 w-8 flex items-center justify-center hover:bg-[#0093A9] cursor-pointer transition-all ease-in-out duration-300 rounded-full '>
                        <HiOutlineSpeakerWave className='text-lg' />
                    </div>
                    </span>
                </p>
                <p className="text-2xl py-5 pr-10  bg-[#eae8e0] ">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati delectus architecto ducimus laudantium quos optio dolorem vero odio eius debitis eaque nesciunt ea, et aut temporibus deleniti dolor corrupti dolores beatae ab culpa voluptatum, repellendus, aspernatur autem. Consectetur, non iure!
                </p>
            </div>
        <IoGlassesOutline className='text-8xl absolute left-1/3 opacity-5' />
        </div>

    </div>
  )
}

export default Hero