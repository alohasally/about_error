import {useState, useEffect} from "react"
import Movie from '../components/Movie';

function Home() {
const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  // useEffect(() => {
  //   fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`)
  //   .then(response=>response.json())
  //   .then((json)=> {
  //   setMovies(json.data.movies);
  //   setLoading(false);
  // });
      
  // } ,[])
  const getMovies = async () => {
    const json = await (await fetch(
      `https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`
    )).json();
    setMovies(json.data.movies);
    setLoading(false);
  };

  useEffect(()=>{
    getMovies();
  }, [])
  console.log(movies);

  return (
    <div className="App">
      {loading ? <h1>Loading...</h1> : null}
  
        {movies.map((movie)=> (
          <Movie 
          key={movie.id}
          title={movie.title}
          coverImg={movie.medium_cover_image}
          summary={movie.summary}
          genres={movie.genres}
          />
        // <div key={movie.id}>
        //   <h2>{movie.title}</h2>
        //   <img src={movie.medium_cover_image}/>
        //   <p>{movie.summary}</p>
        //   <ul>
        //     {movie.genres.map((g)=>(
        //       <li key={g}>{g}</li>)
        //     )}
        //   </ul>
        //   </div>
          ))}  
        </div>
  );
}

export default Home;