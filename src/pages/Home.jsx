import React, { useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import { MediaCard, PageLayout } from '../components'
import useFetchData from '../hooks/useFetchData'
// import useInfiniteScroll from '../hooks/useInfiniteScroll'
import Spinner from '../utils/Spinner'

export default function Home() {
  const { error, data, newData, bottomPage, loading } = useFetchData(
    'trending/movie/week'
  )
  // const [isFetching, setIsFetching] = useInfiniteScroll(fetchMore)

  // function fetchMore() {
  //   setTimeout(() => {
  //     setPage((prev) => prev + 1)
  //     setIsFetching(false)
  //   }, 5000)
  // }

  useEffect(() => {
    document.title = 'Home'
  }, [])

  return (
    <PageLayout heading='Trending Movies' error={error}>
      <Row className='gy-2'>
        {[...newData, ...data].map((movie, index) => {
          if ([...newData, ...data].length === index + 1) {
            return (
              <Col xs={6} md={3} xl={2} key={index} ref={bottomPage}>
                <MediaCard {...movie} />
              </Col>
            )
          } else {
            return (
              <Col xs={6} md={3} xl={2} key={index}>
                <MediaCard {...movie} />
              </Col>
            )
          }
        })}
      </Row>
      {loading && <Spinner />}
    </PageLayout>
  )
}
