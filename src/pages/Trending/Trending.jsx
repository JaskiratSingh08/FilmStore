import axios from 'axios'
import React, { useState, useEffect } from 'react'
import SingleContent from '../../components/SingleContent/SingleContent';

function Trending() {

  const [content, setContent] = useState([]);

  const fetchTrending = async () => {
    const { data } =
      await axios.get(
        `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}`
      )

    console.log(data);

    setContent(data.results);
  };

  useEffect(() => {
    fetchTrending();
  }, [])

  return (
    <div>
      <span className="pageTitle">
        Trending
      </span>
      <div className="Trending">

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
            ratings={c.vote_average}/>
          )
        }

      </div>
    </div>
  )
}

export default Trending