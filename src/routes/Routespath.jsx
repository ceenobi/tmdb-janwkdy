import React from 'react'
import {RouterProvider, createBrowserRouter, createRoutesFromElements, Route} from 'react-router-dom'
import { Layout } from '../components'
import { Genres, Home, Popular } from '../pages'

export default function Routespath() {
    const router = createBrowserRouter(
      createRoutesFromElements(
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path='movies/genres/:id' element={<Genres/>}/>
          <Route path='movies/popular' element={<Popular/>}/>
        </Route>
      )  
    )
  return <RouterProvider router={router}/>
}
