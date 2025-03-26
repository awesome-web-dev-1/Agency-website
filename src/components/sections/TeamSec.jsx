import React from 'react'
import { teamItems } from '../../constant/data'
import TeamCard from './TeamCard'
import { IoChevronBack, IoChevronForward } from 'react-icons/io5'
const TeamSec = () => {
  return (
    <section className='section'>
        <div className="container">
            <p>/ meet our experts /</p>
            <h2>Our Leadership Team</h2>

            <ul className='grid sm:grid-cols-2 md:grid-cols-4 gap-[30px] mt-[50px] mx-auto'>

                {teamItems.map((item,index)=>(
                   <TeamCard key={item.id + index} {...item} />
                ))}

            </ul>
            <div className="flex justify-center gap-1 mx-auto mt-20">
                <div className="w-5 bg-black h-2 rounded-full"></div>
                <div className="w-2 h-2 bg-black rounded-full"></div>
                <div className="w-2 h-2 bg-black rounded-full"></div>
                <div className="w-2 h-2 bg-black rounded-full"></div>
                <div className="w-2 h-2 bg-black rounded-full"></div>
            </div>
            <div className="flex gap-3 justify-center mt-8">
                <button className='bg-black text-white p-2 hover:bg-black/90 focus:bg-black/90'>
                    <IoChevronBack />
                </button>
                <button className='bg-black text-white p-2 hover:bg-black/90 focus:bg-black/90'>
                    <IoChevronForward />
                </button>
            </div>
        </div>
    </section>
  )
}

export default TeamSec