import { dm_serif } from '@/lib/fonts'
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
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, nulla!
            </p>

            <div>
                
            </div>
        </div>
    </div>
  )
}

export default Contact