import React from 'react';
import './Hero.css';
import Carousel from 'react-material-ui-carousel';
import { Paper } from '@mui/material';
import { IMovie } from '../../types/IMovie';

interface IProps {
    movies: IMovie[]
}

const Hero: React.FC<IProps> = ({movies}) => {
  return (
    <div className='movie-carousel-container'>
        <Carousel>
            {
                movies.map((movie) => { 
                    return(
                        <Paper>
                            <div className='movie-card-container'>
                                <div className='movie-card' style={{backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1), url(${movie.backdrops[0]})`}}>
                                    <div className="movie-detail">
                                        <div className="movie-poster">
                                            <img src={movie.poster} alt={movie.title} />
                                        </div>
                                        <div className="movie-title">
                                            <h4>{movie.title}</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Paper>
                    )
                })
            }
        </Carousel>
    </div>
  )
}

export default Hero