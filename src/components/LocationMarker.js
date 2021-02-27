import React from 'react';
import {Icon} from '@iconify/react'
import LocationIcon from '@iconify/icons-mdi/fire-alert'

export const LocationMarker = ({lat, lng,  onClick}) => {
    return (
        <div className='location_marker' onClick={onClick}>
            <Icon icon={LocationIcon} className='location_icon' />
        </div>
    )
}
