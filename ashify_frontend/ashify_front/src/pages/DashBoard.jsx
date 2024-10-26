import React from "react";
import { FaUser, FaSearch } from "react-icons/fa";
import "../styles/dashboard.css";
import card_image from "../assets/images/card_image.jpeg";
import Maher_Zain_image from "../assets/images/video_image.png";
import Current_playing_image from "../assets/images/playing_music_image.png";
import { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import MusicPlayer from "../components/musicPlayer";

const DashBoard = () => {
  return (
    <>
      <div className="dash_board_Navbar">
        <div className="search_container flex items-center justify-between p-4 bg-gray-800">
          <span className="Dotted_botton">...</span>
          <div className="search_box flex items-center bg-gray-700 p-2 rounded-md w-1/2">
            <input
              type="text"
              placeholder="Search any music..."
              className="search_text bg-transparent focus:outline-none text-white w-full"
            />
            <FaSearch className="search_icon text-gray-400 text-lg mr-2" />
          </div>
          <FaUser className="text-white text-4xl cursor-pointer" />
        </div>
        <div className="DashBoard_Section_container">
          <div className="playList_section">
            <div className="playlistActions">
              <div className="sections">
                <div className="first_playlist_section">
                  <h2 id="playlist_text"> Your playlists</h2>
                  <FaSearch
                    onClick={handle_playlist_search}
                    className="search_icon_playlist "
                  />
                </div>
                <div className="second_playlist_section">
                  <span onClick={handle_show_addPlayList_Message} id="add_playlist_button">+</span>
                </div>
              </div>
            </div>
            <div className="playlists">
              <div className="user_playlist">
                <img className="card_image" src={card_image} alt="image_card" />
                <div className="playlist_details">
                  <h4 className="liked_songs_text">Liked Songs</h4>
                  <h4 className="playlist_songs">play list .8 songs</h4>
                </div>
              </div>
              <div className="user_playlist">
                <img className="card_image" src={card_image} alt="image_card" />
                <div className="playlist_details">
                  <h4 className="liked_songs_text">Liked Songs</h4>
                  <h4 className="playlist_songs">play list .8 songs</h4>
                </div>
              </div>
              <div className="user_playlist">
                <img className="card_image" src={card_image} alt="image_card" />
                <div className="playlist_details">
                  <h4 className="liked_songs_text">Liked Songs</h4>
                  <h4 className="playlist_songs">play list .8 songs</h4>
                </div>
              </div>
              <div className="user_playlist">
                <img className="card_image" src={card_image} alt="image_card" />
                <div className="playlist_details">
                  <h4 className="liked_songs_text">Liked Songs</h4>
                  <h4 className="playlist_songs">play list .8 songs</h4>
                </div>
              </div>
              <div className="user_playlist">
                <img className="card_image" src={card_image} alt="image_card" />
                <div className="playlist_details">
                  <h4 className="liked_songs_text">Liked Songs</h4>
                  <h4 className="playlist_songs">play list .8 songs</h4>
                </div>
              </div>
              <div className="user_playlist">
                <img className="card_image" src={card_image} alt="image_card" />
                <div className="playlist_details">
                  <h4 className="liked_songs_text">Liked Songs</h4>
                  <h4 className="playlist_songs">play list .8 songs</h4>
                </div>
              </div>
              <div className="user_playlist">
                <img className="card_image" src={card_image} alt="image_card" />
                <div className="playlist_details">
                  <h4 className="liked_songs_text">Liked Songs</h4>
                  <h4 className="playlist_songs">play list .8 songs</h4>
                </div>
              </div>
            </div>
          </div>
          <div className="popular_music_section">
            <h3 id="popula_music_text">Popular Music</h3>
            <div className="popular_music_container">
              <div className="card_container">
                <div onClick={handle_play_music} className="music_card">
                <img className="atist_image" src={Maher_Zain_image} alt="" />
                </div>
                <h5 className="artist_name">HEIS Rema</h5>
              </div>
              <div className="card_container">
                <div className="music_card">
                  <img className="atist_image" src={Maher_Zain_image} alt="" />
                </div>
                <h5 className="artist_name">Harris J.</h5>
              </div>
              <div className="card_container">
                <div className="music_card">
                  <img className="atist_image" src={Maher_Zain_image} alt="" />
                </div>
                <h5 className="artist_name">Maher Zain</h5>
              </div>
            </div>
            <div className="Recenty_played_section">
              <h3 id="Recenty_played_text">Recenty Played</h3>
              <div className="card_container">
                <div className="music_card">
                <img className="atist_image" src={Maher_Zain_image} alt="" />
                </div>
                <h5 className="artist_name">Harris J.</h5>
              </div>
              <div className="card_container">
                <div className="music_card">
                <img className="atist_image" src={Maher_Zain_image} alt="" />
                </div>
                <h5 className="artist_name">HEIS Rema</h5>
              </div>
              <div className="card_container">
                <div className="music_card">
                <img className="atist_image" src={Maher_Zain_image} alt="" />
                </div>
                <h5 className="artist_name">Maher Zain</h5>
              </div>
            </div>
          </div>
          <div className="playing_music_section">
            <div className="music_options">
              
              <h2 className="playing_music_text">Just Dance</h2>
              <RxCross1 className="close_music" />
            </div>
            <div className="playing_music_card">
            <img className="atist_image" src={Current_playing_image} alt="" />
            </div>
            <div className="artist_deatails">
              <h2 className="playing_music_name">just dance</h2>
              <h1 id="artist_name">Yvan Bruvan</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="play_music_container">
        <MusicPlayer className="music_play_compone" />
      </div>
    </>
  );
};

const handle_play_music = () => {
  alert("u wanna play music");
  return <Display_music />;
};

const handle_playlist_search = () => {
  alert("you wanna search playlist");
};

const handle_show_addPlayList_Message= ()=>{
  return(
    <div className="show_message">
      <h3 style={{color:"white"}} onClick={hand_add_playlist}>Create Playlist</h3>
    </div>
  )
}
export default DashBoard;
