import React from 'react'

export default function Journey(props){
    const country = props.item.location;

    return(
        <div>
            <div className='journey-container'>
                <img src={`${props.item.imageUrl}`} className='image' />
                <div className='text-wrapper'>
                    <div className='country-map'>
                        <p className='country'>{country.toUpperCase()}</p>
                        <a target="_blank" className='map-link' href={`${props.item.googleMapsUrl}`}>View on Google Maps</a>
                    </div>
                    <h2 className='title'>{props.item.title}</h2>
                    <strong className='date'>{props.item.startDate} - {props.item.endDate}</strong>
                    <p className='description'>{props.item.description}</p>
                </div>
            </div> 
        </div>
    )
}