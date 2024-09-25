package com.Ashify_extension.Ashify.service;

import org.springframework.stereotype.Service;

import com.Ashify_extension.Ashify.Entity.User;

@Service
public class MakeUserLogin {

    public void  handleUserLogin(){
        var user= new User();
        String userEmail= user.getUserEmail();
        String userName=user.getUserName();


    }
}
