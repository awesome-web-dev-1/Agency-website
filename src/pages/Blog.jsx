import React from 'react'
import { blogPageItems } from '../constant/data'
import BlogCard from '../components/sections/BlogCard'
import { ChevronLeft, ChevronRight } from 'lucide-react'
const Blog = () => {
  return (
    <section className='section'>
      <div className="container">
      <ul className='grid sm:grid-cols-2 md:grid-cols-3 gap-[30px]'>
          {blogPageItems.map((item,index)=>(
              <BlogCard key={item.id + index} {...item} />
          ))}
      </ul>

      <div className="flex justify-center mt-20 gap-2 items-center">
        <button>
        <ChevronLeft />
        </button>
        <div className="bg-black text-white w-4 h-4 grid place-content-center p-4 rounded-full">1</div>
        <div className="bg-black/05 text-black w-4 h-4 grid place-content-center p-4 rounded-full">2</div>
        <button>
        <ChevronRight />
        </button>
      </div>
      </div>
    </section>
  )
}

export default Blog