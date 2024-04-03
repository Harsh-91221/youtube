import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMenu } from '../utils/appSlice';
import { YOUTUBE_SEARCH_API } from '../utils/constants';
import { cacheResults } from '../utils/searchSlice';

const Header = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const [showsuggestions, setShowSuggestions] = useState(false);
    const searchCache = useSelector((store) => store.search) || {};
    const dispatch = useDispatch();
    useEffect(() => {
        const timer = setTimeout(() => {
            if (searchCache[searchQuery]) {
                setSuggestions(searchCache[searchQuery]);
            }
            else {
                getSearchSuggestions();
            }
        }, 200);
        return () => {
            clearTimeout(timer);
        };
    }, [searchQuery]);
    const getSearchSuggestions = async () => {
        console.log(searchQuery);
        const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
        const json = await data.json();
        dispatch(cacheResults({
            [searchQuery]: json[1],
        }))
    };
    const toggleMenuHandler = () => {
        dispatch(toggleMenu());
    }
    return (
        <div className='grid grid-flow-col p-5 m-2 shadow-lg'>
            <div className='flex col-span-1'>
                <img onClick={() => toggleMenuHandler()} className='h-8 cursor-pointer' alt='LOGO' src='https://cdn4.iconfinder.com/data/icons/wirecons-free-vector-icons/32/menu-alt-512.png'></img>
                <a href='/'>
                    <img className='h-8 mx-2' alt='LOGO' src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png'></img>
                </a>
            </div>

            <div className='col-span-10 px-10'>
                <div>
                    <input className='px-5 w-1/2 border border-gray-400 p-2 rounded-l-full' type='text' value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} onFocus={() => setShowSuggestions(true)} onBlur={() => setShowSuggestions(false)}></input>
                    <button className='border border-gray-400 p-2 rounded-r-full bg-gray-100'> Search </button>
                </div>
                {showsuggestions && (<div className='fixed bg-white py-2 px-2 w-[32rem] shadow-lg rounded-lg'>
                    <ul>
                        {suggestions.map(s => <li key={s} className='px-3 py-2 hover:bg-gray-200'>{s}</li>)}
                    </ul>
                </div>)}
            </div>
            <div className='col-span-1'>
                <img className='h-8' alt='user' src='https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png'></img>
            </div>
        </div>
    )
}

export default Header