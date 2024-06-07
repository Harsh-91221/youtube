import React, { useEffect, useState } from 'react';
import { YOUTUBE_API } from '../utils/constants';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';
import ShimmerUI from './Shimmer';

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getVideos = async () => {
      try {
        const data = await fetch(YOUTUBE_API);
        if (!data.ok) {
          throw new Error('Failed to fetch videos');
        }
        const json = await data.json();
        setVideos(json.items);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    };

    getVideos();
  }, []); // Empty dependency array ensures this effect runs only once

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className='flex flex-wrap'>
      {isLoading ? (
        <ShimmerUI />
      ) : (
        videos.map((video) => (
          <Link key={video.id} to={"/watch?v=" + video.id}>
            <VideoCard info={video} />
          </Link>
        ))
      )}
    </div>
  );
};

export default VideoContainer;
