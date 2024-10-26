import React from "react";
import { FaPlay, FaStepForward, FaStepBackward, FaVolumeUp, FaExpand } from "react-icons/fa";
import "../styles/musicPlayer.css"; 
import card_image from "../assets/images/video_image.png";


const MusicPlayer = () => {
  return (
    <div className="music-player">
      {/* Album Art and Song Info */}
      <div className="album-art">
        <img src={card_image} alt="Album Art" />
      </div>
      <div className="song-info">
        <h4 className="song-title">Iyo Foto</h4>
        <p className="artist-name">Bruce Melodie, Bien</p>
      </div>

      {/* Controls */}
      <div className="controls">
        <span className="time">1:10</span>
        <FaStepBackward className="control-icon" />
        <FaPlay className="control-icon play-icon" />
        <FaStepForward className="control-icon" />
        <div className="progress-bar">
          <div className="progress" style={{ width: "10%" }}></div>
        </div>
        <span className="duration">2:49</span>
      </div>

      {/* Volume and Fullscreen */}
      <div className="volume-fullscreen">
        <FaVolumeUp className="control-icon" />
        <input type="range" className="volume-slider" />
        <FaExpand className="control-icon" />
      </div>
    </div>
  );
};

export default MusicPlayer;
