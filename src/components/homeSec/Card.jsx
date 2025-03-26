import React from 'react'

export const Card = ({icon,title,text,itemId}) => {
  return (
    <div key={itemId} className="card p-[50px] rounded-[20px]">
        <div className="">
            <img src={icon} alt={title} />
        </div>

        <div className="text-white">
            <h4 className='mt-[31px] mb-3'>{title}</h4>
            <p>{text}</p>
        </div>
    </div>
  )
}
