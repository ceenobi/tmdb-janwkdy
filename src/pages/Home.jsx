import React, { lazy, useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import { PageLayout } from '../components'
import useFetchData from '../hooks/useFetchData'
import Spinner from '../utils/Spinner'

const MediaCard = lazy(()=> import('../components/MediaCard'))

export default function Home() {
  const { error, data } = useFetchData('trending/movie/week')

  useEffect(() => {
    document.title = 'Home'
  }, [])
  return (
    <PageLayout heading='Trending Movies' error={error}>
      <React.Suspense fallback={<Spinner />}>
        <Row className='gy-2'>
          {data.map((movie) => (
            <Col xs={6} md={3} xl={2} key={movie.id}>
              <MediaCard {...movie}/>
            </Col>
          ))}
        </Row>
      </React.Suspense>
    </PageLayout>
  )
}
