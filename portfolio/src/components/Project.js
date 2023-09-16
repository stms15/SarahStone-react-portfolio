import React from 'react';

export default function Project(props) {
  return (
    <div>
      <a href={props.href}>
        <img src={props.src}></img>
        <div>
          <h3>{props.name}</h3>
          <p>{props.description}</p>
        </div>
      </a>
    </div>
  );
}
