import React from 'react'
import SearchBox from './SearchBox';
import MovieList from './Favorites';

const Container = () => {
  return (
    <div className='container'>
      <SearchBox />
      <MovieList />
    </div>
  )
}

export default Container;