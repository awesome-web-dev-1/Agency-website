import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'

const Button = ({label,path,className}) => {
  return (
    <Link to={path} className={className}>
      <ArrowUpRight className='bg-white h-11 w-11 text-black rounded-full p-[10px] hover:bg-neutral-950 hover:text-white transition-colors duration-300 border border-black' />
      {label}
    </Link>
  )
}

export default Button