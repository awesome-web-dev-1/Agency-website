import {IoLogoDribbble, IoLogoInstagram, IoLogoLinkedin } from 'react-icons/io5'
const TeamCard = ({key,name,email,imgUrl}) => {
  return (
        <li key={key} className='team-card'>
            <figure>
                <img src={imgUrl} alt={name} className='rounded-[20px] w-full' />
            </figure>

            <div className="border-b">
                <h4 className='text-neutral-800 text-[20px] mt-[21px] mb-[5px]'>{name}</h4>
                <p className='mt-[6px] mb-[16px]'>{email}</p>
            </div>
            <div className="flex gap-2 mt-5">
                <a href="" className='hover:text-neutral-800 transition-colors duration-200'>
                    <IoLogoLinkedin size={26} />
                </a>
                <a href="" className='hover:text-neutral-800 transition-colors duration-200'>
                    <IoLogoDribbble size={26} />
                </a>
                <a href="" className='hover:text-neutral-800 transition-colors duration-200'>
                    <IoLogoInstagram size={26} />
                </a>
            </div>
        </li>
  )
}

export default TeamCard