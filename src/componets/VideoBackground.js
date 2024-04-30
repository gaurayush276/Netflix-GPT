import React, { useEffect, useState } from "react";
import { API_OPTIONS } from "../utils/constants";


const VideoBackground = ({ movieId }) => {

  const [trailerId ,sertrailerId ] = useState (null ) ; 

  const getMovieVideos = async () => {
    const data = await fetch("https://api.themoviedb.org/3/movie/1041613n/videos?language=en-US",API_OPTIONS
    );
    const json = await data.json();
    console.log("here is the api call for movie videos ");
    console.log(json);

    const filterData = json?.results?.filter((video) => video.type === 'Trailer'); 
    console.log(filterData) ; 
    const trailer = filterData.lenght ? filterData[1] : json?.results[0] ; 
    console.log(trailer);
    sertrailerId(trailer?.key) ; 
  };
  useEffect(() => {
    getMovieVideos();
  }, []);

  return (
    <div className=" w-full  ">
      <iframe
      className=" w-full   aspect-video pointer-events-none"
        src={"https://www.youtube.com/embed/"+ trailerId + "?&autoplay=1&mute=1&loop=1"  }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      
 
      ></iframe>
    </div>
  );
};

export default VideoBackground;
