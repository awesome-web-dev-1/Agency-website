import { ArrowUpRight } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'
const BlogCard = ({imgUrl,tag1,tag2,title,text,link,index}) => {
  return (
    <li key={index}>
        <div className="">
            <img src={imgUrl} alt={title} className='w-full rounded-[20px]' />
        </div>

        <div className="mt-[20px]">
            <div className="flex gap-x-3">
                <span className='bg-neutral-200/70 p-2 inline-block rounded-md text-neutral-950'>{tag1}</span>
                <span className='bg-neutral-200/70 p-2 inline-block rounded-md text-neutral-950'>{tag2}</span>
            </div>
            <h4 className='text-neutral-950 mt-3 mb-4'>{title}</h4>
            <p className='text-left'>{text}</p>
            <Link to='' className='text-neutral-900 font-semibold hover:underline mt-[15px] flex gap-1 max-w-max'>{link}
            <ArrowUpRight />
            </Link>
        </div>
    </li>
  )
}

export default BlogCard