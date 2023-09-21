import React from 'react'

export default function Journey(props){
    return(
        <>
            <div className='journey-container'>
                <img src={`${props.item.imageUrl}`} className='image' />
                <div>
                    <div className='country-map'>
                        <p className='country'>{props.item.location}</p>
                        <a className='map-link' href={`${props.item.googleMapsUrl}`}>View on Google Maps</a>
                    </div>
                    <h2>{props.item.title}</h2>
                    <strong>{props.item.startDate} - {props.item.endDate}</strong>
                    <p className='description'>{props.item.description}</p>
                </div>
            </div> 
        </>
    )
}