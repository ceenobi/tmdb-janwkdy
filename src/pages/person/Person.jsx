import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { PageLayout, PersonCard } from '../../components'
import useFetchData from '../../hooks/useFetchData'
import Spinner from '../../utils/Spinner'

export default function Person() {
  const { error, loading, data } = useFetchData('person/popular')
  if (loading) return <Spinner />
  return (
    <PageLayout heading='Trending People' error={error}>
      <Row className='gy-2'>
        {data.map((person) => (
          <Col xs={6} md={3} xl={2} key={person.id}>
            <PersonCard {...person} />
          </Col>
        ))}
      </Row>
    </PageLayout>
  )
}
