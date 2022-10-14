import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react';
import CustomPagination from '../../components/Pagination/CustomPagination';
import SingleContent from '../../components/SingleContent/SingleContent';
import './Movies.scss'

function Movies() {

  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);
  const [numOfPages, setNumOfPages] = useState();

  const fetchMovies = async () => {
    const { data } =
      await axios.get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&page=${page}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&with_watch_monetization_types=flatrate` //&language=en-US
      )

    console.log(data);

    setContent(data.results);
    setNumOfPages(data.total_pages);
  };

  useEffect(() => {
    fetchMovies();
  }, [page])

  return (
    <div>
      <span className="pageTitle">
        Movies
      </span>
      <div className="Movies">
        {
          content && content.map((c) =>
            // console.log(c);
            <SingleContent
              key={c.id}
              id={c.id}
              poster={c.poster_path}
              title={c.title || c.name}
              rdate={c.release_date || c.first_air_date}
              overview={c.overview}
              media_type={c.media_type}
              ratings={c.vote_average} />
          )
        }

      </div>
      <CustomPagination setPage={setPage} numOfPages={numOfPages}/>

    </div>
  )
}

export default Movies;