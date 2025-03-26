import React from 'react'
import Input from '../components/sections/Input'
import {IoLogoFacebook, IoLogoInstagram, IoLogoLinkedin } from 'react-icons/io5'
import { footerLinks, footerLinks2, footerLinks3 } from '../constant/data'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <footer className='py-[60px] bg-black relative'>
      <div className="container">
        <div className="grid gap-8 md:grid-cols-[1fr_0.5fr_0.5fr_0.8fr]">
        <div className="">
          <a href="#" className=''>
            <img src="/images/footer-logo.png" alt="footer logo" className='max-w-max' />
          </a>

          <p className='mt-[33px] mb-6 max-w-[330px]'>We are recruitment agency that help you find more talents to develop business</p>
          <Input />

          <div className="flex gap-5 mt-6">
            <button className='ring-1 p-3 transition-colors duration-200 ring-white rounded-full hover:bg-white hover:text-black text-white'>
              <IoLogoInstagram size={24} />
            </button>
            <button className='ring-1 p-3 transition-colors duration-200 ring-white rounded-full hover:bg-white hover:text-black text-white'>
              <IoLogoLinkedin size={24} />
            </button>
            <button className='ring-1 p-3 transition-colors duration-200 ring-white rounded-full hover:bg-white hover:text-black text-white'>
              <IoLogoFacebook size={24} />
            </button>
          </div>
        </div>

        <div className="">
          <h4 className='text-[20px]'>Solution</h4>
          <ul className='flex flex-col gap-[14px] mt-5'>
            {footerLinks2.map((item)=>(
              <li>
                <Link to='' className='hover:text-white duration-300'>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="">
          <h4 className='text-[20px]'>About Us</h4>
          <ul className='flex flex-col gap-[14px] mt-5'>
            {footerLinks3.map((item)=>(
              <li>
                <Link to='' className='hover:text-white duration-300'>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="">
          <h4 className='text-[20px]'>Help & Support</h4>
          <ul className='flex flex-col gap-[14px] mt-5'>
            {footerLinks.map((item)=>(
              <li>
                <Link to='' className='hover:text-white duration-300'>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        </div>

        <div className="w-full h-[1px] bg-neutral-200/20 my-10"></div>

        <p>
          Copyright &copy; 2025 Recrutie. All right reserved.
        </p>
      </div>
      <img src="/images/shape-4.svg" alt="shape image" className='absolute top-1/2 -right-16' />
    </footer>
  )
}

export default Footer