import React, { lazy } from 'react'
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'
import { Error, Layout } from '../components'
import { Genres, MovieId, Person, PersonId, Popular, Toprated } from '../pages'
import Spinner from '../utils/Spinner'
const Home = lazy(() => import('../pages/Home'))

export default function Routespath() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout />} errorElement={<Error />}>
        <Route
          index
          element={
            <React.Suspense fallback={<Spinner />}>
              <Home />
            </React.Suspense>
          }
        />
        <Route path='movies/genres/:id' element={<Genres />} />
        <Route path='movies/popular' element={<Popular />} />
        <Route path='movies/top_rated' element={<Toprated />} />
        <Route path='person/popular' element={<Person />} />
        <Route path='movie/:movie_id' element={<MovieId />} />
        <Route path='person/:person_id' element={<PersonId />} />
      </Route>
    )
  )
  return <RouterProvider router={router} />
}
