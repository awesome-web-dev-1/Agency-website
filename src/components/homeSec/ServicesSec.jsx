import React from 'react'
import Button from '../../common/Button'
import { servicesCardItems } from '../../constant/data'
import ServicesCard from '../sections/ServicesCard'

const ServicesSec = () => {
  return (
    <section className='section'>
        <div className="container">
            <div className='flex flex-col  md:flex-row md:justify-between md:items-center gap-6'>
                <div>
                <p className="subtitle">/ our services /</p>
                <h2>A Leading Global Provider <br /> Of Recruitment</h2>
                </div>
                <Button label='See All Services' className='btn-primary' />
            </div>

            <ul className='grid gap-9 sm:grid-cols-2 md:grid-cols-3 mt-[50px]'>
                {servicesCardItems.map((item,index)=>(
                    <ServicesCard key={index} title={item.title} text={item.text} imgUrl={item.imgUrl} bgImgUrl={item.bgImgUrl} id={item.id} />
                ))}
            </ul>
        </div>
    </section>
  )
}

export default ServicesSec