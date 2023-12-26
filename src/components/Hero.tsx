import Image from 'next/image'
import heroImg from '../../unnamed.jpg'
import { inter } from '@/lib/fonts'

const Hero = () => {
  return (
    <div>
        <div className="w-[90%] mx-auto flex justify-between relative py-7">
            <div className='flex-[1.3] '></div>
            <div className='flex-1 overflow-hidden border-4 w-full border-black'>
                <Image src={heroImg} alt="" className='w-full hover:scale-110 transition-all duration-500 ease-linear' />
            </div>

            <div className='absolute top-1/4 z-10 lg:w-[60%]'>
                <h1 className={`text-8xl font-bold mb-8 uppercase ${inter.className}`}>Adekemi <br /> Adeyombo</h1>
                <p className="text-2xl py-5 pr-10 font-extralight  bg-[#eae8e0] border-r-4 border-black">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati delectus architecto ducimus laudantium quos optio dolorem vero odio eius debitis eaque nesciunt ea, et aut temporibus deleniti dolor corrupti dolores beatae ab culpa voluptatum, repellendus, aspernatur autem. Consectetur, non iure!
                </p>
            </div>
        </div>
    </div>
  )
}

export default Hero