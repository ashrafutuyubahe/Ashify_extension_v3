package com.Ashify_extension.Ashify.Entity;

import jakarta.persistence.*;
import java.util.List;

@Entity
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "user_id")
    private int userId; // Renamed to follow Java naming conventions

    @Column(name = "user_name", nullable = false)
    private String userName;

    @Column(name = "user_email", nullable = false, unique = true)
    private String userEmail;

    private boolean hasPlaylist;

     @ElementCollection 
    private List<String> musicPlayList;

    
    public User() {}

   
    public int getUserId() {
        return userId;
    }

    public String getUserName() {
        return userName;
    }

    public String getUserEmail() {
        return userEmail;
    }

    public boolean isHasPlaylist() {
        return hasPlaylist;
    }

    public List<String> getMusicPlayList() {
        return musicPlayList;
    }

    
    public void setUserName(String userName) {
        this.userName = userName;
    }

    public void setUserEmail(String userEmail) {
        this.userEmail = userEmail; 
    }

    public void setHasPlaylist(boolean hasPlaylist) {
        this.hasPlaylist = hasPlaylist;
    }

    public void setMusicPlayList(List<String> musicPlayList) {
        this.musicPlayList = musicPlayList;
    }

    @Override
    public String toString() {
        return "User{" +
                "userId=" + userId +
                ", userName='" + userName + '\'' +
                ", userEmail='" + userEmail + '\'' +
                ", hasPlaylist=" + hasPlaylist +
                ", musicPlayList=" + musicPlayList +
                '}';
    }
}
