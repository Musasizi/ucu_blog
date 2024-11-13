"use client";

import Title from "../components/Title";
import Content from "../components/Content";
import Button from '@mui/material/Button';
import { useState, useEffect } from "react";

function Home() {

  const [showBlog, setShowBlog] = useState(false);
  const [randomText, setRandomText] = useState("No button has been clicked!");
  const [moviesData, setMoviesData] = useState([]);


  function changeBlogs() {
    setShowBlog(!showBlog);

    if (showBlog) {
      setRandomText("This is UMU!")
    } else {
      setRandomText("This is MUK!")
    }

  }

  async function fetchTopMovies() {
    const url = 'https://imdb-top-100-movies.p.rapidapi.com/';
    const options = {
      method: 'GET',
      headers: {
        'x-rapidapi-key': '90165b2056msh5218e1ec6e762c2p1b30b0jsn0b7be9272e36',
        'x-rapidapi-host': 'imdb-top-100-movies.p.rapidapi.com'
      }
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      setMoviesData(result);
      console.log(response);
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {

    fetchTopMovies()

  }, [])

  return (
    <div>

      {moviesData.map((movie) => {
        return <div>
          <p>{movie.rank}. {movie.title}</p>
          <img src={movie.thumbnail} />
          <small>{movie.description}</small>
        </div>
      })}
      {showBlog ? <div>
        <Title heading="MAKERERE BLOG" />
        <Content details="This is a very nice blog from MAK" />
      </div>
        : <div>
          <Title heading="UGANDA MARTYRS BLOG" />
          <Content details="This is a very nice blog from UMU" />
        </div>
      }
      <br />
      <p> {randomText}</p>



      <Button variant="contained" onClick={changeBlogs}>TOGGLE BLOGS</Button>




    </div>
  );
}

export default Home;