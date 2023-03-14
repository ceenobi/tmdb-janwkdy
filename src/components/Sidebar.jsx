import React from 'react'
import { NavLink } from 'react-router-dom'
import { categories } from '../utils/Constants'

export default function Sidebar() {
  return (
    <div className='d-flex flex-column gap-2 px-lg-4 mt-lg-5'>
      <h1 className='text-secondary fs-6 mt-2 mt-lg-5 mb-1 mb-lg-3'>
        Discover
      </h1>
      {categories.map((category, index) => (
        <NavLink to={`/${category.href}`} key={index} className={({isActive})=> isActive ? 'text-warning' : 'text-white'}>
          <div className='d-flex gap-2 align-items-center py-1'>
            <div style={{ fontSize: '1.3rem' }}>{category.icon}</div>
            <span title={category.name}>{category.name}</span>
          </div>
        </NavLink>
      ))}
    </div>
  )
}
