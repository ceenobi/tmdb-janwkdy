import React from 'react'
import {RouterProvider, createBrowserRouter, createRoutesFromElements, Route} from 'react-router-dom'
import { Layout } from '../components'
import { Home } from '../pages'

export default function Routespath() {
    const router = createBrowserRouter(
      createRoutesFromElements(
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}/>
        </Route>
      )  
    )
  return <RouterProvider router={router}/>
}
