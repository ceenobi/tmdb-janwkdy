import React from 'react'
import { Form } from 'react-bootstrap'
import { FiSearch } from 'react-icons/fi'

export default function Searchbar() {
  return (
    <div className='position-relative'>
      <Form>
        <div className='position-relative'>
          <input type='text' placeholder='Search Movies & People' className='border-0 border-bottom bg-dark text-white'/>
          <FiSearch type='submit' className='text-white position-absolute top-50 end-0 translate-middle-y'/>
        </div>
      </Form>
    </div>
  )
}
