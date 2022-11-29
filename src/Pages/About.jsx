import React, { useEffect, useState } from 'react'
import Movie from '../component/Movie'
import { useParams } from 'react-router-dom'
import requests from '../Request'
import axios from 'axios'

const About = () => {
  const [movieDetail, setMovieDetail] = useState()
  const { id } = useParams()
  const fetchURL = `https://api.themoviedb.org/3/movie/${id}?api_key=6cd1b828745bc502298b15a5b7951e4d&language=en-US`
  useEffect(() => {
    axios.get(fetchURL).then(res => {
      setMovieDetail(res.data)
    })
  }, [fetchURL])

  console.log(movieDetail)


  return (
    <>
      <div className='flex flex-col items-center justify-center relative h-screen'>
        <img className='h-full w-full object-cover' src={`https://image.tmdb.org/t/p/original/${movieDetail?.backdrop_path}`} alt="" />
        <div className='absolute left-0 top-0 about-gradient h-screen flex items-start justify-center flex-col w-[40em]'>
          <div className='pl-20 pt-10 flex flex-col items-start justify-center gap-5'> 


            <h1 className='text-white text-7xl leading-[85px] my-font font-semibold'>{movieDetail?.title.slice(0, movieDetail?.title.length)}</h1>
            <div className='flex items-center justify-center gap-3 text-[#a3a3a3]'>
              <p>{movieDetail?.release_date.slice(0, 4)} |</p>
              <p>{movieDetail?.runtime}min |</p>
              <p>{movieDetail?.genres[0].name}</p>
            </div>
            <p className='text-white'>{movieDetail?.overview}</p>
            <p className='text-white text-xl'>Watch all you want.</p>
            <button className='bg-[#e0403b] text-white px-8 py-3 w-80 rounded-md font-medium uppercase'>Watch Now</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default About
