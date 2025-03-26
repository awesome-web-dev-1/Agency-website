import React from 'react'
import Button from '../../common/Button'

const GetAQuote = () => {
  return (
    <section className='section bg-sky-100/30'>
        <div className="container">
            <div className="">
            <p>/ get a quote /</p>
            <h2>Request A Call Back</h2>
            <p>Contact to us when you have questions our solution or something elses.</p>

            <div className="grid md:grid-cols-2 items-center">
            <form action="" className='grid gap-5 mt-8'>
                <div className="bg-white h-[50px] rounded-3xl">
                    <input type="text" placeholder='Name*' aria-label='Name' className='w-full h-full outline-none indent-5 focus:border border-black rounded-3xl' />
                </div>
                <div className="bg-white h-[50px] rounded-3xl">
                    <input type="email" placeholder='Email*' aria-label='email' className='w-full h-full outline-none indent-5 focus:border border-black rounded-3xl' />
                </div>
                <div className="bg-white h-[50px] rounded-3xl">
                    <input type="text" placeholder='Phone Number *' aria-label='phone number' className='w-full h-full outline-none indent-5 focus:border border-black rounded-3xl' />
                </div>
                <div className="bg-white h-[50px] rounded-3xl">
                    <input type="text" placeholder='Interested in *' aria-label='Interested in' className='w-full h-full outline-none indent-5 focus:border border-black rounded-3xl' />
                </div>
                <textarea name="textarea" id="textarea" placeholder='Message' className='outline-none h-[140px] indent-5 resize-none focus:border border-black py-5 rounded-3xl'></textarea>
                <Button label='Send Request' className='btn-primary' />
            </form>

            <figure className="hidden md:block">
                <img src="/images/h1-callback.png" alt="quote-banner" />
            </figure>
            </div>
            </div>
        </div>
    </section>
  )
}

export default GetAQuote