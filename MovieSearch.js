import { useEffect, useState } from "react";

export default function MovieSearch({movieName}) {

    let [movie , setMovie] = useState([])
    

    const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1';
    const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';
    const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="';

    // GET RANDOM MOVIES BY DEFAULT....
    useEffect(() => {
      fetch (API_URL)
      .then( function(response) {
        return response.json()
        })
       .then( function(response) {
         console.log(response)
         setMovie(response)
       })
    }, [])

    console.log(movie.results)

    // SEARCH MOVIES .........START-------
    useEffect(() =>{
      fetch (SEARCH_API + movieName)
      .then(function(result) {
         console.log("First Result", result)
        return result.json()
        })
       .then(function(result) {
         console.log("Final Result",result)
         setMovie(result)
       })
    }, [movieName])
     
    

   return(
     
      <div className="dis-flex">
         {
            // movie.results.length &&
            movie.results?.map((curElement) => {
               return(
                  <div className="col">
                     <img className="poster-img" src= {IMG_PATH + curElement.poster_path} />
                     <h1> {curElement.title} </h1>
                     <p> {curElement.overview} </p>
                     
                  </div>
               )
            })
         }
      </div>
     
  )  
}