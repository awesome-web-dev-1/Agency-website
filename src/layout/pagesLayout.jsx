import React from 'react'
import PagesRecrutie from './PagesRecrutie'
import { Outlet } from 'react-router-dom'

const pagesLayout = () => {
  return (
    <>
    <PagesRecrutie />
    <Outlet />
    </>
  )
}

export default pagesLayout