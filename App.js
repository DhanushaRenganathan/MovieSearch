import { useState } from "react";

import './App.css';
import MovieSearch from './MovieSearch';
import Input from './Input';

function App() {
  const [movieName, setMovieName] = useState()
  return (
    <div className="App">

      <Input movieName = {movieName}  setMovieName = {setMovieName} />
      
      <MovieSearch movieName = {movieName} />

    </div>
  );
}

export default App;
