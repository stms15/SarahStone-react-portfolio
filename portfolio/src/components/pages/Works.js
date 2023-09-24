import React from 'react';
import Project from '../Project';
import myTimeFillersImg from '../../assets/images/MyTimeFillers.png';
import pokeplaylistImg from '../../assets/images/PokePlaylist.png';
import textEditorImg from '../../assets/images/PWA-TextEditor.jpg';
import noteTakerImg from '../../assets/images/NoteTakerApp.png';
import passwordGeneratorImg from '../../assets/images/PasswordGenerator.png';
import weatherDashboardImg from '../../assets/images/WeatherForecastDashboard.png';

export default function Works({ color }) {
  return (
    <div className="page" style={{ backgroundColor: color }}>
      <h2>Previous Works</h2>
      <div className="card-container">
        <Project
          href="https://my-time-fillers-eb26f5332548.herokuapp.com/"
          githubHref="https://github.com/EliteHuskie/project-2-physical-media-collection-application"
          imgSrc={myTimeFillersImg}
          imgAlt="Home page of My Time Fillers"
          name="My Time Fillers"
          description="Keep track of your favourite collections of movies, tv shows, and books. Create collections you already have or ones you're trying to collect. You can even upload a picture of your own collection to show it off!"
        />
        <Project
          href="https://stms15.github.io/PokePlaylist-app/"
          githubHref="https://github.com/stms15/PokePlaylist-app"
          imgSrc={pokeplaylistImg}
          imgAlt="Home page of PokePlaylist"
          name="Pok&eacute;Playlist"
          description="Choose your favourite Pok&eacute;mon to be on your ideal team and discover your recommended playlist based on your team."
        />
        <Project
          href="https://unb-jate-text-editor-c3306f1ac582.herokuapp.com/"
          githubHref="https://github.com/stms15/PWA-text-editor"
          imgSrc={textEditorImg}
          imgAlt="Home page of JATE"
          name="J.A.T.E"
          description="Just Another Text Editor. Exactly how it sounds. JATE is a text editor that runs in the browser and can also be downloaded and functions offline."
        />
        <Project
          href="https://infinite-shelf-99725-dcdc141ca9fd.herokuapp.com/"
          githubHref="https://github.com/stms15/note-taker-app"
          imgSrc={noteTakerImg}
          imgAlt="Home page of Note Taker App"
          name="Note Taker App"
          description="Take notes online and save them to always have them when you open the website."
        />
        <Project
          href="https://stms15.github.io/random-password-generator/"
          githubHref="https://github.com/stms15/random-password-generator"
          imgSrc={passwordGeneratorImg}
          imgAlt="Home page of the Random Password Generator website"
          name="Random Password Generator"
          description="Generate a custom&ndash;length password between 8 and 128 using any combination of character types."
        />
        <Project
          href="https://stms15.github.io/weather-forecast-dashboard/"
          githubHref="https://github.com/stms15/weather-forecast-dashboard"
          imgSrc={weatherDashboardImg}
          imgAlt="Home page of the Weather Forecast Dashboard website"
          name="Weather Forecast Dashboard"
          description="Get the 5&ndash;day weather forecast for any city of your choosing. "
        />
      </div>
    </div>
  );
}
