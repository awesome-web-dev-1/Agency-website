import React from 'react'
import { caseStudiesItems } from '../constant/data'

const CaseStudies = () => {
  return (
    <section className='section'>
      <div className="container text-center">
        <p>/ our case studies /</p>
        <h2>Provide The Best Service <br /> With Out Of The Box Ideas</h2>

        <ul className="grid sm:grid-cols-2 md:grid-cols-3 mt-[50px] gap-[30px]">
          {caseStudiesItems.map((item)=>(
            <li key={item.id}>
              <img src={item.imgUrl} alt="case Studies image" className='w-full rounded-[20px]' />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default CaseStudies