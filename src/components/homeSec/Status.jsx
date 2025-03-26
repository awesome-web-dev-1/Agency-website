import React from 'react'
import { statusItems } from '../../constant/data'

const Status = () => {
  return (
    <section className='py-[120px]'>
        <div className="container flex flex-wrap justify-center gap-[80px] lg:gap-[140px]">
            {statusItems.map((item)=>(
                <div className="text-center" key={item.id}>
                    <h3 className='text-4xl md:text-5xl'>{item.num}</h3>
                    <p>{item.text}</p>
                </div>
            ))}
        </div>
    </section>
  )
}

export default Status