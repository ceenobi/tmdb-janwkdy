import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Row, Col, Image } from 'react-bootstrap'
import Spinner from '../../utils/Spinner'
import axios from 'axios'
import { API_KEY, BASE_URL } from '../../api/config'
import {
  Imagebox,
  MediaCard,
  PageLayoutId,
  ScrollButtons,
} from '../../components'
import useScroll from '../../hooks/useScroll'

export default function PersonId() {
  const { person_id } = useParams()
  const [dataId, setDataId] = useState(null)
  const [error, setError] = useState(null)
  const [showPicModal, setShowPicModal] = useState(false)
  const [index, setIndex] = useState(1)
  const { scrollRef, scroll } = useScroll()

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          `${BASE_URL}/person/${person_id}?api_key=${API_KEY}&append_to_response=images,movie_credits`
        )
        setDataId(response.data)
      } catch (error) {
        console.log(error)
        setError(error)
      }
    }
    fetchData()
  }, [person_id])

  useEffect(() => {
    if (showPicModal) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [showPicModal])

  useEffect(() => {
    document.title = dataId?.name
  }, [dataId?.name])

  console.log('personid', dataId)

  if (!dataId) return <Spinner />

  const {
    name,
    profile_path,
    biography,
    gender,
    birthday,
    place_of_birth,
    images: { profiles },
    movie_credits: { cast },
  } = dataId

  return (
    <PageLayoutId
      src={`https://image.tmdb.org/t/p/original/${profile_path}`}
      error={error}
    >
      <div className='d-md-flex gap-4'>
        <div className='text-center text-md-start mb-4'>
          <Image
            src={`https://image.tmdb.org/t/p/w500/${profile_path}`}
            className='rounded-2 media_poster'
            alt={name}
            title={name}
          />
        </div>
        <div className='text-white'>
          <h1 className='fs-4'>{name}</h1>
          <h1 className='fs-5'>Biography</h1>
          {biography.split('\n\n').map((paragraph, index) => (
            <p key={index}>
              {paragraph
                .split('\n')
                .reduce((total, line) => [total, <br />, line])}
            </p>
          ))}
          <h1 className='fs-5'>Personal info</h1>
          <div className='d-flex flex-wrap gap-2'>
            <div>
              <p className='text-secondary mb-0 fw-bold'>Gender</p>
              <p>{gender === 1 ? 'Female' : 'Male'}</p>
            </div>
            <div>
              <p className='text-secondary mb-0 fw-bold'>Birthday</p>
              <p>{birthday}</p>
            </div>
            <div>
              <p className='text-secondary mb-0 fw-bold'>Place of birth</p>
              <p>{place_of_birth}</p>
            </div>
          </div>
        </div>
      </div>
    </PageLayoutId>
  )
}
