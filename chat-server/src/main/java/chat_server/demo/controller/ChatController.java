package com.yourcompany.chatbot.controller;

import com.yourcompany.chatbot.model.ChatRequest;
import com.yourcompany.chatbot.model.ChatResponse;
import com.yourcompany.chatbot.service.FastApiService;
import org.springframework.web.bind.annotation.*;
import reactor.core.publisher.Mono;

@RestController
@RequestMapping("/api/chat")
public class ChatController {

    private final FastApiService fastApiService;

    public ChatController(FastApiService fastApiService) {
        this.fastApiService = fastApiService;
    }

    // 게이트웨이 역할
    @PostMapping
    public Mono<ChatResponse> chat(@RequestBody ChatRequest request) {
        return fastApiService.getEmotionalResponse(request);
    }
}