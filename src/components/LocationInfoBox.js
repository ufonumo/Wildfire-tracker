import React from 'react'

export const LocationInfoBox = ({info}) => {
    return (
        <div className="location_info">
            <h3>Wildfire Location Info</h3>
            <ul>
                <li>ID: <b>{info.id}</b></li> 
                <li>TITLE: <b>{info.title}</b></li>
            </ul>
        </div>
    )
}
