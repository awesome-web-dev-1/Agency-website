import React from 'react'
import { whoWeAreItems } from '../../constant/data'

const WhoWeAre = () => {
  return (
    <section className='py-[80px]'>
        <div className="container">
            <p className='md:text-center'>/ who we are /</p>
            <h2 className='md:text-center'>A Leading Global Provider <br /> Of Recruitment</h2>
            <div className="grid gap-[40px] md:gap-[80px] md:grid-cols-2 md:items-center md:mt-[80px]">
                <div className="md:order-1">
                    <p className='mt-4 mb-[31px] max-w-[636px]'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae.</p>
                    <ul className='grid grid-cols-2 gap-[31px]'>
                        {whoWeAreItems.map((item)=>(
                            <li key={item.id}>
                                <h3 className='mb-[9px]'>{item.title}</h3>
                                <p>{item.text}</p>
                            </li>
                        ))}
                    </ul>
                </div>
                <figure className="grid grid-cols-12 who-we-are-banner mx-auto max-w-max">
                        <img src="/images/who-we-are-img-1.png" alt="banner" className='rounded-[20px]' />
                        <img src="/images/who-we-are-img-2.png" alt="banner" className='rounded-[20px]' />
                </figure>
            </div>
        </div>
    </section>
  )
}

export default WhoWeAre