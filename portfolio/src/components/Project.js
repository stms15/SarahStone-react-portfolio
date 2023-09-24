import React from 'react';
import '../styles/Project.css';
import githubIcon from '../assets/images/GitHub-icon.svg';

export default function Project(props) {
  return (
    <div className="card">
      <a href={props.href} target="_blank" rel="noreferrer">
        <img src={props.imgSrc} alt={props.imgAlt}></img>
        <div>
          <span
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <a href={props.href} target="_blank" rel="noreferrer">
              <h3>{props.name}</h3>
            </a>
            <a href={props.githubHref} target="_blank" rel="noreferrer">
              <img className="icon" src={githubIcon} alt="GitHub Icon"></img>
            </a>
          </span>
          <p>{props.description}</p>
        </div>
      </a>
    </div>
  );
}
