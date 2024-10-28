package com.Ashify_extension.Ashify.Controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.Ashify_extension.Ashify.Repository.GetAccessToken;
import com.Ashify_extension.Ashify.service.GetMessageService;

@RestController
@RequestMapping("/ashify/v1/")
public class GetMessageFromAshify {

    private final GetMessageService getMessageService;

    @Autowired
    public GetMessageFromAshify(GetMessageService getMessageService) {
        this.getMessageService = getMessageService;
    }

    @GetMapping("/Welcome_message")
    public String getMessage() {
        return getMessageService.getMessage();
    }

    @GetMapping("/search_music")
    public String getSearched_Music(){
        return "your musics";
    }


}
