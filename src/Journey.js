import React from "react";
export default function Journey(props){
    return(
        <>
        <div className="journey--card">
            <img src={props.imageUrl} alt="" className="journey--image"/>
            <div className="journey--details">
                <span className="dark-text uppercase"><i className="fa-solid fa-location-dot"></i> {props.location}</span>
                <span className="location"><a href={props.googleMapsUrl}  className="light-text">View on Google Maps</a></span>
                <h1 className="title">{props.title}</h1>
                <h4 className="dates">{props.startDate} - {props.endDate}</h4>
                <p>{props.description}</p>
            </div>
        </div>
        </>
        
    )
}