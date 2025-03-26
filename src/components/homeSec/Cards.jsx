import React from 'react'
import { homeCardItems } from '../../constant/data'
import { Card } from './Card'

const Cards = () => {
  return (
    <section className='py-[120px]'>
        <div className="container grid md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
        {homeCardItems.map((item,index)=>(
            <Card icon={item.icon} title={item.title} text={item.text} itemId={item.id + index} />
        ))}
        </div>
    </section>
  )
}

export default Cards