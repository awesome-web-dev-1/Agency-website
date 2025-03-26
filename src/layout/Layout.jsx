import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

const Layout = () => {
  return (
    <>
    <Header />
    <main className='min-h-[100vh]'>
      <Outlet />
    </main>
    <Footer />
    </>
  )
}

export default Layout