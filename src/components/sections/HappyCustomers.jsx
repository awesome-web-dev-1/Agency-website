import React from 'react'
import { customersText } from '../../constant/data'
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react'

const HappyCustomers = () => {
  return (
    <section className='section'>
        <div className="container grid md:grid-cols-2 items-center gap-12">
            <figure className="order-1 md:-order-1">
                <img src="/images/h1-customer.png" alt="custom banner" className='rounded-s-[20px] rounded-se-[120px] rounded-es-[120px] rounded-ee-[20px]' />
            </figure>
            <div className="overflow-x-hidden">
                <img src="/images/quote.svg" alt="quote icon" />
                <h2 className='mt-[23px]'>Our Happy Customers</h2>
                <div className="flex gap-10 my-[25px]">
                    {customersText.map((item)=>(
                        <div className="min-w-full" key={item.id}>
                            <p className='font-semibold text-neutral-700 italic text-[18px]'>{item.text}</p>
                            <h4 className='text-neutral-800 text-[18px] my-2'>{item.author}</h4>
                            <p>{item.job}</p>
                        </div>
                    ))}
                </div>
                <div className="flex gap-3">
                    <button className='bg-black text-white p-2 transition-colors hover:bg-black/90'>
                        <ChevronLeftIcon />
                    </button>
                    <button className='bg-black text-white p-2 transition-colors hover:bg-black/90'>
                        <ChevronRightIcon  />
                    </button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default HappyCustomers