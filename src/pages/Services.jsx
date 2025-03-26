import React from 'react'
import { servicesCardItems } from '../constant/data'
import ServicesCard from '../components/sections/ServicesCard'
import Button from '../common/Button'
import Input from '../components/sections/Input'
const Services = () => {
  return (
    <>
      <section className='section'>
        <div className="container">
            <p className="subtitle text-center">/ our services /</p>
            <h2 className='text-center'>A Leading Global Provider <br /> Of Recruitment</h2>

            <ul className='grid gap-9 sm:grid-cols-2 md:grid-cols-3 mt-[50px]'>
                {servicesCardItems.map((item,index)=>(
                    <ServicesCard key={index} title={item.title} text={item.text} imgUrl={item.imgUrl} bgImgUrl={item.bgImgUrl} id={item.id} />
                ))}
            </ul>
        </div>
    </section>

    <section className='mx-5 section'>
        <div className="container bg-black bg-[url(/images/Background.svg)] bg-no-repeat bg-cover bg-center text-white rounded-[20px] p-[50px] flex flex-col items-center justify-center md:flex-row gap-6 md:gap-[215px]">
            <h2 className='text-white max-w-[450px]'>Find The Best <br /> Talents & Build Relationship</h2>
            <div className="max-w-[450px]">
                <p className='mb-[26px]'>The most complete talent relationship platform for talent sourcing, recruitment events and internal mobility</p>
                <Input />
            </div>
        </div>
    </section>
    </>
  )
}

export default Services