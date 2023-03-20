import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { API_KEY, BASE_URL } from '../api/config'
import { MediaCard, PageLayout } from '../components'
import useFetchData from '../hooks/useFetchData'
import Spinner from '../utils/Spinner'

export default function Genres() {
  const { id } = useParams()
  const [genreList, setGenreList] = useState([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const { genres } = useFetchData('genre/movie/list')

  // eslint-disable-next-line eqeqeq
  const filterGenreTitle = genres.filter((genre) => genre.id == id)

  useEffect(() => {
    async function fetchData() {
      setLoading(true)
      try {
        const response = await axios.get(
          `${BASE_URL}/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc&include_video=false&page=1&with_genres=${id}`
        )
        const movieList = response.data.results
        setGenreList(movieList)
      } catch (error) {
        console.log(error)
        setError(error)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [id])

  if (loading) return <Spinner />

  return (
    <PageLayout
      error={error}
      heading={`${filterGenreTitle.map((title) => title.name)} Movies`}
    >
      <Row className='gy-2'>
        {genreList.map((movie) => (
          <Col xs={6} md={3} xl={2} key={movie.id}>
            <MediaCard {...movie} />
          </Col>
        ))}
      </Row>
    </PageLayout>
  )
}
