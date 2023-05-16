import './App.css';
import { FetchData } from './api/FetchData';
import { useState, useEffect } from 'react';
import Layout from './components/Layout';
import Home from './components/home/Home';
import { Routes, Route } from 'react-router-dom';
import { IMovie } from './types/IMovie';

function App() {

  const [movies, setMovies] = useState<IMovie[]>([]);

  const getMovies = async () => {
    try {
      const response = await FetchData.get();
      console.log(response.data);

      setMovies(response.data);
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getMovies();
  }, [])

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path='/' element={<Home movies={movies} />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
