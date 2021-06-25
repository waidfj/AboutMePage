import React from "react";
import "../Styles/Me.css";
import waid from "../images/waid.jpeg";

function Me() {
  return (
    <div className="main">
      <img src={waid} alt="waid" className="myImage" />
      <div className="texts">
        <h1 className="name">Waid Al-Jamal</h1>
        <div className="age text1">16</div>{" "}
        <div className="age text2">years</div>{" "}
        <div className="age text3">old</div>
        <br />
        <div className="age text3">4</div>{" "}
        <div className="age text2">March</div>{" "}
        <div className="age text1">2005</div>
        <br />
        <h5 className="favouriteStuff">
          Favourite hobbies: Playing volleyball, watching sport matches
          (especially volleyball matches), hanging out with friends, playing
          video games and watching movies and series
        </h5>
        <div className="favouriteArtist">
          <h5 className="favouriteStuff">
            Favourite artist:{" "}
            <a
              href="https://open.spotify.com/artist/1Hsdzj7Dlq2I7tHP7501T4?si=MMfl2qj_Rr2ciYo0h3148g"
              className="link"
            >
              Niall Horan
            </a>
          </h5>
        </div>
        <h5 className="favouriteStuff">
          Favourite album:{" "}
          <a
            href="https://open.spotify.com/album/7ahctQBwcSxDdP0fRAPo2p?si=A1fBTTflSd-0zDnHMm5e6w"
            className="link"
          >
            Flicker
          </a>
        </h5>
        <h5 className="favouriteStuff">
          Favourite song:{" "}
          <a
            href="https://open.spotify.com/track/1Xi84slp6FryDSCbzq4UCD?si=CrbTk6WmQ26T4p_mIk_Gkg"
            className="link"
          >
            Arcade
          </a>
        </h5>
        <h5 className="favouriteStuff">
          Favourite sport: volleyball (obviously)
        </h5>
        <h5 className="favouriteStuff"> Favourite series: Kalp Atışı</h5>
        <h5 className="favouriteStuff">Favourite movie: Back to the future</h5>
        <h5 className="favouriteStuff">Favourite food: Shawerma </h5>
      </div>
    </div>
  );
}

export default Me;
