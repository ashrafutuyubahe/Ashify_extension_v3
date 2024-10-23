import React from "react";
import { FaUser, FaSearch } from "react-icons/fa";
import "../styles/dashboard.css";
import card_image from "../assets/images/card_image.jpeg";

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
                  <span id="add_playlist_button">+</span>
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
                <div onClick={handle_play_music} className="music_card"></div>
                <h5 className="artist_name">HEIS Rema</h5>
              </div>
              <div className="card_container">
                <div className="music_card"></div>
                <h5 className="artist_name">Harris J.</h5>
              </div>
              <div className="card_container">
                <div className="music_card"></div>
                <h5 className="artist_name">Maher Zain</h5>
              </div>
            </div>
            <div className="Recenty_played_section">
              <h3 id="Recenty_played_text">Recenty Played</h3>
              <div className="card_container">
                <div className="music_card"></div>
                <h5 className="artist_name">Harris J.</h5>
              </div>
              <div className="card_container">
                <div className="music_card"></div>
                <h5 className="artist_name">HEIS Rema</h5>
              </div>
              <div className="card_container">
                <div className="music_card"></div>
                <h5 className="artist_name">Maher Zain</h5>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </>
  );
};

const handle_play_music = () => {
  alert("u wanna play music");
return (
    <Display_music/>
)
};

const handle_playlist_search = () => {
  alert("you wanna search playlist");
};
export default DashBoard;
