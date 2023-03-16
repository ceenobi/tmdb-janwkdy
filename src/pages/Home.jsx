import React, { useEffect } from 'react'
import { MediaCard, PageLayout } from '../components'
import useFetchData from '../hooks/useFetchData'

export default function Home() {
  const { error, data } = useFetchData('trending/movie/week')

  useEffect(() => {
    document.title = 'Home'
  }, [])
  return (
    <PageLayout heading='Trending Movies' error={error}>
      <div className='d-flex flex-wrap gap-3'>
        {data.map((movie) => (
          <MediaCard {...movie} key={movie.id} />
        ))}
      </div>
    </PageLayout>
  )
}
