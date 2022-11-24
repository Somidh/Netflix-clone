import React from 'react'
import Movie from '../component/Movie'

const About = ({title, detail}) => {

    console.log(title)


  return (
    <div className='flex flex-col items-center justify-center'>
      <p className='text-white'>{title}</p>
      <h1 className='text-white'>I am in about</h1>
      <p className='text-white'>the title is {title}</p>
      <p className='text-white'>the is {detail}</p>
    </div>
  )
}

export default About
