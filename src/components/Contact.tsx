import { dm_serif } from '@/lib/fonts'
import Link from 'next/link'
import React from 'react'

const Contact = () => {
  return (
    <div>
        <div>
        <h2
          className={` ${dm_serif.className} text-right text-[25rem] opacity-10 leading-none mb-16`}
        >
          003
        </h2>
        </div>
        <div className='w-[90%] mx-auto '>
            <h3
              className={`${dm_serif.className} text-7xl uppercase font-medium mb-5 `}
            >
              Contact
            </h3>
            <p className='mb-10 text-xl'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, nulla!
            </p>

            <div className='text-4xl flex items-center space-x-24'>
                <div className='group w-44'>
                  <Link href={'/'} className=" ">
                    Behance
                  </Link>
                  <div className="h-[1.7px] bg-black w-0 group-hover:w-full transition-all ease-linear duration-[400ms] " />
                </div>
                <div className='group w-48'>
                  <Link href={'/'} className=" ">
                    Hashnode
                  </Link>
                  <div className="h-[1.7px] bg-black w-0 group-hover:w-full transition-all ease-linear duration-[400ms] " />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact