import React from 'react';
import Project from '../Project';
import placeholderImg from '../../assets/images/placeholder.jpg';

export default function Works() {
  return (
    <Project
      href="https://my-time-fillers-eb26f5332548.herokuapp.com/"
      imgSrc={placeholderImg}
      imgAlt="Placeholder image"
      name="My Time Fillers"
      description="Keep track of your favourite collections of movies, tv shows, and books. Create collections you already have or ones you're trying to collect. You can even upload a picture of your own collection to show it off!"
    />
  );
}
