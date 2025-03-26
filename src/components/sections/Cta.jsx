import React from 'react'
import Button from '../../common/Button'
import Input from './Input'

const Cta = () => {
  return (
    <section className='mx-5'>
        <div className="container bg-black text-white rounded-[20px] p-[50px] flex flex-col items-center justify-center md:flex-row gap-6 md:gap-[215px]">
            <h2 className='text-white max-w-[450px]'>Find The Best <br /> Talents & Build Relationship</h2>
            <div className="max-w-[450px]">
                <p className='mb-[26px]'>The most complete talent relationship platform for talent sourcing, recruitment events and internal mobility</p>
                <Input />
            </div>
        </div>
    </section>
  )
}

export default Cta