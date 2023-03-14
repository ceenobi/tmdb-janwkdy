import React from 'react'
import {Navbar, Sidebar} from './'


export default function Layout() {
  return (
    <>
    <Navbar/>
    <div className='d-lg-flex w-100'>
      <div className='sideDesktop'>
        <div className='d-none d-lg-block position-fixed top-0 start-0'>
          <Sidebar/>
        </div>

      </div>
    </div>
    </>
  )
}
