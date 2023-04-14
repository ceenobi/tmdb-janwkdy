import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { PageLayout, PersonCard } from '../../components'
import useFetchData from '../../hooks/useFetchData'
//import useInfiniteScroll from '../../hooks/useInfiniteScroll'
import Spinner from '../../utils/Spinner'

export default function Person() {
  const { error, data, newData, bottomPage, loading } =
    useFetchData('person/popular')
  // const [isFetching, setIsFetching] = useInfiniteScroll(fetchMore)

  // function fetchMore() {
  //   setTimeout(() => {
  //     setPage((prev) => prev + 1)
  //     setIsFetching(false)
  //   }, 5000)
  // }

  if (!data) return <Spinner />

  return (
    <PageLayout heading='Trending People' error={error}>
      <Row className='gy-2'>
        {[...newData, ...data].map((movie, index) => {
          if ([...newData, ...data].length === index + 1) {
            return (
              <Col xs={6} md={3} xl={2} key={index} ref={bottomPage}>
                <PersonCard {...movie} />
              </Col>
            )
          } else {
            return (
              <Col xs={6} md={3} xl={2} key={index}>
                <PersonCard {...movie} />
              </Col>
            )
          }
        })}
      </Row>
      {loading && <Spinner />}
    </PageLayout>
  )
}
