import './Banner.css'
import instance from '../instance'
import requests from '../request'

import React , {useEffect,useState} from 'react'

function Banner() {
    const [movie,SetMovie] = useState([])
    const base_url = "https://image.tmdb.org/t/p/original/";


    const fetchData = async ()=>{
        const response = await instance.get(requests.fetchNetflixOriginals)
        console.log(response.data.results[Math.floor(Math.random()*response.data.results.length)]);
        SetMovie(response.data.results[Math.floor(Math.random()*response.data.results.length)])
    }

    console.log(movie);


    useEffect(()=>{
        fetchData()
    },[])
  return (
    <div className='banner'
    style={{ backgroundSize:'cover',  backgroundImage:`url(${base_url}${movie.backdrop_path})`}}>
        
        <h2>{movie.name}</h2>
    </div>
  )
}

export default Banner