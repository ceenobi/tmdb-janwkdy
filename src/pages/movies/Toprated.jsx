import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { MediaCard, PageLayout } from '../../components'
import useFetchData from '../../hooks/useFetchData'
import Spinner from '../../utils/Spinner'

export default function Toprated() {
     const { error, loading, data } = useFetchData('movie/top_rated')
     if (loading) return <Spinner />
  return (
    <PageLayout heading='Top Rated' error={error}>
      <Row className='gy-2'>
        {data.map((movie) => (
          <Col xs={6} md={3} xl={2} key={movie.id}>
            <MediaCard {...movie} />
          </Col>
        ))}
      </Row>
    </PageLayout>
  )
}
