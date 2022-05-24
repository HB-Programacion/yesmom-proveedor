import React from 'react'

import './Switch.css';

const Switch = ({visible}) => {
    return (
        <div className={`switch--container ${visible}`
        }>
            <div className="switch--yes">
                Si
            </div>
            <div className="switch--no">
                No
            </div>
        </div>
    )
}

export default Switch
