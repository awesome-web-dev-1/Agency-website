import React from 'react'
import { howItWorkCardItems } from '../../constant/data'

const HowWeWork = () => {
  return (
    <section className='section bg-grayClr/25'>
        <div className="container">
            <p className="subtitle md:text-center">/ how we work /</p>
            <h2 className='md:text-center'>Solutions To Improve <br /> Performance</h2>
            <p className='max-w-[505px] pt-[26px] pb-[51px] md:mx-auto'>Ut enim ad minima veniam quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi.</p>

            <ul className='grid sm:grid-cols-2 md:grid-cols-4 gap-[30px]'>
                {howItWorkCardItems.map((item)=>(
                    <li className='text-center p-7' key={item.id}>
                        <div className="bg-white max-w-max mx-auto p-[18px] rounded-full">
                            <img src={item.IconUrl} alt={item.title} />
                        </div>

                        <div className="">
                            <h4 className='text-neutral-900 mt-[26px] mb-3'>{item.title}</h4>
                            <p>{item.text}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    </section>
  )
}

export default HowWeWork