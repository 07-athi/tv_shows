import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import './home.css';

function Home({setId}) {
  const [shows, setShows] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('https://api.tvmaze.com/search/shows?q=all')
      .then(response => response.json())
      .then(data => {
        setShows(data.map(result => result.show));
      });
  }, []);

  
  return (
    <div className="App overflow-hidden">
      <h1 className=" text-7xl  font-bold font-serif text-white pt-72 md:pt-24 pb-12">All Shows</h1>
      <div className="grid-container ">
        {shows.map(show => (
          <div key={show.id} className="grid-item">
            <img className='transform hover:scale-105 pt-4 pb-4 border shadow-2xl font-semibold rounded-3xl border-transparent hover:font-bold text-red-600 md:w-60 w-28'  src={show.image?.original} alt={show.name + " image"} height="70"/>
            <a className="link text-white font-bold text-lg font-mono" onClick={() => navigate(`/details/${show.id}`)}>{show.name}</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;