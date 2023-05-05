import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ViewDetails = () => {
    const { id } = useParams();
    const [shows, setShow] = useState([]);

  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${id}`)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setShow(data);
      });
  }, [id]);
    
  return (
    <div className='App'>
        <div className=' pt-60  font-serif text-white '>
        <h3>Name: {shows?.name}</h3>
        </div>
        <div className=' pb-2 font-serif text-white '><h3>Genre: { shows?.type}</h3></div>
        <div className=' pb-2 font-serif text-white  '><h3>Language: {shows?.language}</h3></div>
        <div className=' flex justify-center items-centerpb-2 font-serif text-white  pt-7 md:p-52 p-28 '><h3>Summary: {shows.summary}</h3></div>
        
        
    </div>
  )
}

export default ViewDetails