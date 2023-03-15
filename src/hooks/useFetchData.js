import { useState, useEffect } from 'react'
import { API_KEY, BASE_URL } from '../api/config'

export default function useFetchData(url) {
  const [data, setData] = useState([])
  const [genres, setGenres] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function fetchData() {
      setLoading(true)
      try {
        const response = await fetch(
          `${BASE_URL}/${url}?api_key=${API_KEY}&language=en-US`
        )
        const movieList = await response.json()
        setGenres(movieList.genres)
      } catch (err) {
        console.log(err)
        setError(err)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [url])

  return {data, error, loading,genres}
}
