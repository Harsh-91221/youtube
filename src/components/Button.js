import React from 'react'

const Button = ({name}) => {
    return (
        <div>
            <button className='px-3 p-2 mx-3 bg-gray-200 rounded-xl font-semibold text-sm hover:bg-gray-300'>{name}</button>
        </div>
    )
}

export default Button