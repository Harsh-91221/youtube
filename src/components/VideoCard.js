import React from 'react';
import { numFormatter } from '../utils/constants';

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
        <div className="flex flex-col mx-2 my-4 gap-2 shadow-lg w-[310px] h-[260px]   rounded-xl  ">
            <div>
                <img className="rounded-xl " src={thumbnails.medium.url} alt="thumbnail" />
            </div>
            <ul className="flex flex-col  p-2 w-full">
                <li className="font-semibold text-md   truncate overflow-hidden">
                    {title}
                </li>
                <li className="text-sm text-gray-500 truncate">{channelTitle}</li>
                <ul className="flex gap-3 text-xs">
                    <li>{statistics && numFormatter(statistics.viewCount)} views</li>
                </ul>
            </ul>
        </div>
    );
};

export default VideoCard;
