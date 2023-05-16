import React from 'react'
import Hero from '../hero/Hero'
import { IMovie } from '../../types/IMovie'

interface IProps {
  movies: IMovie[]
}

const Home: React.FC<IProps> = ({movies}) => {
  return (
    <Hero movies={movies} />
  )
}

export default Home