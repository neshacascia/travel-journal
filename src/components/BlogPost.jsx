import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

export default function BlogPost(props) {
  return (
    <div className="blog-post-container">
      <img className="blog-post-img" src={props.item.imageURL} />

      <div className="blog-post-text">
        <span className="location">
          <FontAwesomeIcon
            className="location-icon"
            icon={faLocationDot}
          ></FontAwesomeIcon>
          {props.item.location.toUpperCase()}
        </span>
        <a className="maps-link" href={props.item.googleMaps} target="_blank">
          View on Google Maps
        </a>

        <h2>{props.item.title}</h2>
        <span className="date">{props.item.travelDate}</span>
        <p>{props.item.description}</p>
      </div>
    </div>
  );
}
