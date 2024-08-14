import React from "react";
import venueIcon from "./Images/Fill 219.png";

export default function TravelItem(props){
    console.log(props)
    return (
        <div className="travel-item-container">
            <img src={props.item.img} alt="scenery" className="scenery-image" />
            <div>
                <p className="item-location-info">
                    <img src={venueIcon} alt="" className="item-venue-icon" />
                    <span className="item-country">{props.item.country}</span>
                    <a href="https://www.google.com" className="item-venue-link">View on Google Maps</a>
                </p>
                <h1 className="item-scenery-name">{props.item.scenery}</h1>
                <p className="item-date">{props.item.date}</p>
                <p className="item-description">{props.item.description}</p>
            </div>
        </div>
    )
}