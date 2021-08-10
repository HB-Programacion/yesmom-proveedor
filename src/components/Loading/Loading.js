
import React from 'react'
import Loader from 'react-loader-spinner';

import './Loading.css';
const Loading = () => {
    return (
        <div className="loading__main">
            <Loader 
                type="ThreeDots" 
                color="#00BFFF" 
                height={80} 
                width={80} 
            />
        </div>
    )
}

export default Loading
