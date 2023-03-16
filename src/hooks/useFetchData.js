import { useState, useEffect } from 'react'
import { API_KEY, BASE_URL } from '../api/config'
import axios from 'axios'

export default function useFetchData(url) {
  const [data, setData] = useState([])
  const [genres, setGenres] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function fetchData() {
      setLoading(true)
      try {
        const response = await axios.get(
          `${BASE_URL}/${url}?api_key=${API_KEY}&language=en-US`
        )
        const movieList = response.data.results
        setGenres(response.data.genres)
        setData(movieList)
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
