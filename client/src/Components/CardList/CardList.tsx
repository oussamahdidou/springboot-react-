import React, { useEffect, useState } from 'react';
import './CardList.css';
import Card from '../Card/Card';
import { TodayTrends } from '../../api/api';
import { Movie } from '../../Interfaces/Movie';

const CardList = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const results = await TodayTrends(); // Call the TodayTrends function
      setMovies(results);
      console.log('Fetched Movies:', results); // Log the fetched movies
    };
    fetchMovies();
  }, []);

  return (
    <div className='container-fluid CardsList'>
   
<div className="mx-auto d-flex justify-content-center align-items-center py-5">
  <div className="group py-5">
  <svg viewBox="0 0 24 24" aria-hidden="true" className="search-icon">
    <g>
      <path
        d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"
      ></path>
    </g>
  </svg>

  <input
    id="query"
    className="input"
    type="search"
    placeholder="Search..."
    name="searchbar"
  />
</div>
</div>

      <div className=" container row mx-auto justify-content-center align-items-center pb-4">
        {movies.map((movie) => (
          <div key={movie.id} className="col-lg-2 col-md-4 col-sm-6 p-2">
            <Card  {...movie} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardList;
