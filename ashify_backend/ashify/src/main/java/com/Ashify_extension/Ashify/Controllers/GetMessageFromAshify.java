package com.Ashify_extension.Ashify.Controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.Ashify_extension.Ashify.service.GetMessageService;

@RestController
@RequestMapping("/ashify/v1/")
public class GetMessageFromAshify {
    
    private final GetMessageService getMessageService;

    // Constructor-based dependency injection
    @Autowired
    public GetMessageFromAshify(GetMessageService getMessageService) {
        this.getMessageService = getMessageService;
    }

    // Endpoint to get the message
    @GetMapping("/message")  
    public String getMessage() {
        return getMessageService.getMessage();
    }
}
