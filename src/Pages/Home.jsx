import React from 'react'
import Main from '../component/Main'
import Row from '../component/Row'
import requests from '../Request'

const Home = () => {
  return (
    <div>
      <Main />
      <Row rowId='1' title='UpComing' fetchURL={requests.requestUpcoming} /> 
      <Row rowId='2' title='Popular' fetchURL={requests.requestPopular} /> 
      <Row rowId='3' title='Trending' fetchURL={requests.requestTrending} /> 
      <Row rowId='4' title='Top Rated' fetchURL={requests.requestTopRated} /> 
      <Row rowId='5' title='Horror' fetchURL={requests.requestHorror} /> 
    </div>
  )
}

export default Home
