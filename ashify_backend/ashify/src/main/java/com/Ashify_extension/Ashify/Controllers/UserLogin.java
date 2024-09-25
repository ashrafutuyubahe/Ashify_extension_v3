package com.Ashify_extension.Ashify.Controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("ashify/v1/")
public class UserLogin {




@GetMapping("/login")
public void  userLoginController(){
     System.out.println("you are gonna login");
}
}
