import React from 'react';

const VideoCard = ({ info }) => {
    if (!info) {
        return <div>No video information available</div>;
    }
    const { snippet, statistics } = info;
    if (!snippet) {
        return <div>No snippet information available</div>;
    }
    const { channelTitle, title, thumbnails } = snippet;
    if (!thumbnails) {
        return <div>No thumbnail information available</div>;
    }
    return (
        <div className='p-2 m-2 w-72 shadow-lg'>
            <img className='rounded-lg' alt='thumbnails' src={thumbnails.medium.url}></img>
            <ul>
                <li className='font-bold py-2'>{title}</li>
                <li>{channelTitle}</li>
                <li>{statistics && statistics.viewCount} views</li>
            </ul>
        </div>
    );
};

export default VideoCard;
