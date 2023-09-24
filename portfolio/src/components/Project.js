import React from 'react';
import '../styles/Project.css';

export default function Project(props) {
  return (
    <div className="card">
      <a href={props.href}>
        <img src={props.imgSrc} alt={props.imgAlt}></img>
        <div>
          <h3>{props.name}</h3>
          <p>{props.description}</p>
        </div>
      </a>
    </div>
  );
}
