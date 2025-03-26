import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const ServicesCard = ({title,text,link,imgUrl,bgImgUrl,id}) => {
  return (
    <li className='border rounded-[20px] shadow-sm' key={id}>
        <div className="p-[30px]">
            <h4 className='text-neutral-900 my-[14px] text-xl'>{title}</h4>
            <p>{text}</p>
            <Link to='' className='text-neutral-800 font-semibold hover:underline mt-[42px] flex gap-1 max-w-max'>
            Explore Now
            <ArrowUpRight />
            </Link>
        </div>

        <div className="relative overflow-y-hidden px-[30px] pt-[50px] pb-[30px]">
            <img src={imgUrl} alt={title} className='mx-auto w-full rounded-[20px]' />
            <img src={bgImgUrl} alt="bg Images" className='absolute top-0 left-0 right-0 bottom-0 w-full -z-10' />
        </div>
    </li>
  )
}

export default ServicesCard