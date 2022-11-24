import React, { useEffect, useState } from 'react'
import Movie from '../component/Movie'
import { useParams } from 'react-router-dom'
import requests from '../Request'
import axios from 'axios'

const About = () => {
const [movieDetail, setMovieDetail] = useState()
  const {id} = useParams()
  const fetchURL = `https://api.themoviedb.org/3/movie/${id}?api_key=6cd1b828745bc502298b15a5b7951e4d&language=en-US`
    useEffect(() => {
      axios.get(fetchURL).then(res => {
        setMovieDetail(res.data)
      })
  }, [fetchURL])

  console.log(movieDetail)


  return (
    <div className='flex flex-col items-center justify-center'>
        <p className='text-white'>{movieDetail?.title}</p>
    </div>
  )
}

export default About
