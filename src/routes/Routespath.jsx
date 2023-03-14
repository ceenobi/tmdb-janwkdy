import React from 'react'
import {RouterProvider, createBrowserRouter, createRoutesFromElements, Route} from 'react-router-dom'
import { Layout } from '../components'

export default function Routespath() {
    const router = createBrowserRouter(
      createRoutesFromElements(
        <Route path='/' element={<Layout/>}>

        </Route>
      )  
    )
  return <RouterProvider router={router}/>
}
