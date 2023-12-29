import Contact from '@/components/Contact'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import WID from '@/components/WID'
import { FaCircleChevronUp } from "react-icons/fa6";

export default function Home() {
  return (
    <main className="min-h-screen">
      <div>
          <Header />
          <Hero />
          <WID />
          <Contact />

          <div>
            <div className='w-[90%] mx-auto flex justify-between items-center py-10 '>
              <p className='text-2xl flex flex-1 space-x-2 items-center'>
                <div>Made by</div>
                <div className='group w-52'>
                  <a href="https://koyev3.vercel.app" target='_blank' className='text-[#0093A9]' >Koye</a>
                  <div className="h-[1.7px] bg-[#0093A9] w-0 group-hover:w-16 transition-all ease-linear duration-[400ms] " />
                </div>
              </p>

              <div className='flex-1 flex justify-center items-center'>
                <a href="#" className=''>
                <FaCircleChevronUp className='text-6xl hover:animate-pulse text-[#0093A9]' />
                </a>
              </div>

              <div className='flex-1'>

              </div>
            </div>
          </div>
      </div>
    </main>
  )
}
