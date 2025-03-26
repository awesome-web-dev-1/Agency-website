import React from 'react'
import Button from '../../common/Button'

const Input = () => {
  return (
    <div className="bg-white max-w-max flex items-center p-1 rounded-full">
        <input type="email" placeholder='Enter Email' aria-label='email' className='indent-5 outline-none h-full text-neutral-800' />
        <Button label='Subscribe now' className='btn-primary' />
    </div>
  )
}

export default Input