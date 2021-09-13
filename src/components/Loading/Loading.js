
import React from 'react'
import Loader from 'react-loader-spinner';

import './Loading.css';
const Loading = () => {
    return (
        <div className="loading__main">
            <Loader 
                type="ThreeDots" 
                color="#DC6A8D" 
                height={80} 
                width={80} 
            />
        </div>
    )
}

export default Loading
