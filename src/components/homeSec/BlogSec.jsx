import React from 'react'
import { blogSecItems } from '../../constant/data'
import BlogCard from '../sections/BlogCard'

const BlogSec = () => {
  return (
    <section className='section md:text-center'>
        <div className="container">
            <p>/ our blog /</p>
            <h2 className='mb-[50px]'>Explore Our Lastest Articles</h2>
            <div className="md:flex md:gap-[30px]">
            <div className="relative">
                <img src="/images/Container.png" className='rounded-xl bg-gradient-to-bl from-neutral-700/50 to-transparent w-full h-full object-cover' alt="blog banner" />
                <div className="absolute bottom-0 left-0 p-5 text-left">
                    <div className="flex flex-wrap gap-2">
                    <span className="text-white bg-black px-4 py-2 inline-block rounded-xl">IT Companies</span>
                    <span className='text-white bg-black px-4 py-2 rounded-xl'>Uncategorized</span>
                    </div>
                    <h4 className='mt-[15px]'>How to Attract Top <br /> Talent to Your Company</h4>
                </div>
            </div>

                <ul className='grid gap-[40px] mt-10 md:mt-0 md:gap-[30px] md:grid-cols-2'>
                    {blogSecItems.map((item,index)=>(
                        <BlogCard key={item.id + index} {...item} />
                    ))}
                </ul>
            </div>
        </div>
    </section>
  )
}

export default BlogSec