import React from 'react'
import Button from '../common/Button'

const Error = () => {
  return (
    <section className='grid place-content-center h-[100vh]'>
      <div className="container text-center">
        <h2 className='text-[70px] sm:text-[140px]'>404</h2>

        <h3 className='text-2xl font-semibold'>Sorry, we can’t find this page!</h3>
        <p className='max-w-[489.64px] mt-4 mb-[50px]'>Unfortunately, something went wrong and this page does not exist. Try using the search or return to the previous page.</p>
        <Button label='Back To Homepage'  className='btn-primary mx-auto' path='/'/>
      </div>
    </section>
  )
}

export default Error