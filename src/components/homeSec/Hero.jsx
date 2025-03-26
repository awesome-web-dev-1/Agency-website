import React from 'react'
import Button from '../../common/Button'

const Hero = () => {
  return (
    <section className="py-[150px] md:pt-[230px] relative max-h-[1903px]">
        <div className="container flex flex-col gap-14">
            <div className="md:text-center">
                <h1 className='text-4xl md:text-5xl lg:text-[60px] leading-tight'>Best Solution To Get <br /> Good Employees</h1>
                <p className='my-6 mb-8 max-w-[568px] md:mx-auto'>Social creatures, living in prides led by a dominant male. They rely on teamwork during hunts, showcasing their exceptional hunting skills.</p>
                <Button label='Learn More' className='btn-primary md:mx-auto' />
            </div>
            <figure className="mx-auto">
                <img src="/images/hero-banner.png" alt="hero banner" width={650} height={171.99} />
            </figure>
        </div>
        <div className="hidden lg:block absolute top-[18%] left-[4%] -z-10 aspect-[]">
            <img src="/images/hero-banner-2.png" alt="hero image" width={237.86} height={301.3} />
        </div>
        <div className="hidden lg:block absolute bottom-[11.15%] left-[20%] rounded-lg overflow-hidden -z-10">
            <img src="/images/hero-banner-3.png" alt="" width={165.5} height={199.2}/>
        </div>
        <div className="hidden lg:block absolute top-[20.86%] right-[12.35%] -z-10">
            <img src="/images/hero-banner-4.png" alt="" height={ 199.2 } width={165.5} />
        </div>
        <div className="hidden lg:block absolute bottom-[4.9%] right-[9.6%] -z-10">
            <img src="/images/hero-banner-5.png" alt="" width={278.5} height={328.05} />
        </div>
        {/* Shapes */}
        <div className="absolute -top-16 -right-16 hidden xl:block -z-10">
            <img src="/images/shape-1.svg" alt="" width={229} height={229} />
        </div>
        <div className="absolute bottom-0 right-0 hidden md:block -z-10">
            <img src="/images/shape-2.svg" alt="" width={84} height={116} />
        </div>
        <div className="absolute bottom-0 left-0 hidden md:block -z-10">
            <img src="/images/shape-3.svg" alt="" width={112} height={42} />
        </div>
    </section>
  )
}

export default Hero