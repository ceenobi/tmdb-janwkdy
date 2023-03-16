import React from 'react'
import { Navbar, Sidebar } from './'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <>
      <Navbar />
      <div className='d-lg-flex'>
        <div className='sideDesktop'>
          <div className='d-none d-lg-block position-fixed top-0 start-0'>
            <Sidebar />
          </div>
        </div>
        <div className='outlet px-1 px-md-2'>
          <Outlet />
        </div>
      </div>
    </>
  )
}
