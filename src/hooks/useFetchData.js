import { useState, useEffect, useRef } from 'react'
import { API_KEY, BASE_URL } from '../api/config'
import axios from 'axios'

export default function useFetchData(url) {
  const [data, setData] = useState([])
  const [newData, setNewData] = useState([])
  const [genres, setGenres] = useState([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(1)
  const observer = useRef()

  const bottomPage = (node) => {
    if (loading) return
    if (observer.current) observer.current.disconnect()

    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setPage((prev) => prev + 1)
      }
    })
    if (node) observer.current.observe(node)
  }

  useEffect(() => {
    async function fetchData() {
      setLoading(true)
      try {
        const response = await axios.get(
          `${BASE_URL}/${url}?api_key=${API_KEY}&language=en-US&page=${page}`
        )
        const movieList = response.data.results
        setGenres(response.data.genres)
        setData(movieList)
        setNewData([...newData, ...data])
      } catch (err) {
        console.log(err)
        setError(err)
      }
      setLoading(false)
    }
    fetchData()

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url, page])

  return { data, error, genres, setPage, newData, bottomPage, loading }
}
