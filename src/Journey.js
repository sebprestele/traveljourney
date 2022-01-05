import React from "react"

export default function Journey (props) {
    return (
        <div className="journey--container">
            <img src={props.item.imageUrl} className="journey--img"/>
            <div className="journey--info">
                 <span className="location--el"><i className="fas fa-map-marker-alt"></i>{props.item.location}
                 <a href={props.item.googleMapsUrl} target="blank">View on Google Map</a></span>
                <h2>{props.item.title}</h2>
                <h4>{props.item.startDate} - {props.item.endDate}</h4>
                <p>{props.item.description}</p>
            </div>
        
        </div>
    )
}