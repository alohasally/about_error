import axios from '../api/axios';
import React, {useState, useEffect} from 'react'
import requests from '../api/requests';
import './Banner.css';

function Banner() {
const [movie, setMovie] = useState([])

useEffect(() => {
   fetchData();

}, [])

const fetchData = async () => {
    //  현재 상영중인 영화 정보를 가져오기(여러영화)
    const request = await axios.get(requests.fetchNowPlaying)
    console.log(request);
    // 여러 영화 중 영화 하나의 ID를 가져오기
    const movieId = request.data.results[
        Math.floor(Math.random()* request.data.results.length)
    ].id;

    //특정 영화의 더 상세한 정보를 가져오기 (비디오 정보도 포함)
    const {data: movieDetail} = await axios.get(`movie/${movieId}`, {
        params: {append_to_response: 'videos'},
    });
    setMovie(movieDetail);

}

return (
  
  <header
  className='banner'
  style={{
    backgroundImage: `url('https://image.tmdb.org/t/p/original/${movie.backdrop_path}')`,
    backgroundPosition: 'top center',
    backgroundSize: 'cover',
  }}
  >
    <div className='banner__contents'>
        <h1 className='banner__title'>{movie.title || movie.name || movie.original_name }</h1>

        <div className='banner__buttons'>
            <button className='banner__Button play'>Play</button>
            <button className='banner__Button info'>More Information</button>
        </div>

        <h1 className='banner__description'>{movie.overview.length > 150 ? `${movie.overview.slice(0, 150)}` : movie.overview}...</h1>
    </div>
    <div className='banner--fadeBottom' />
  </header>
   );

}

export default Banner