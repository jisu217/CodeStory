// 클라이언트 요청을 받아 서비스로 전달하는 API 컨트롤러

package com.emotional_ai_chatbot_backend.emotional.controller;

import com.emotional_ai_chatbot_backend.emotional.domain.ChatResponse; 
import com.emotional_ai_chatbot_backend.emotional.domain.ChatRequest;
import com.emotional_ai_chatbot_backend.emotional.service.AiChatService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

// REST API 제공 Controller
@RestController
@RequestMapping("/api/chat")
public class ChatController {

    private final AiChatService aiChatService;

    // 의존성 주입
    public ChatController(AiChatService aiChatService) {
        this.aiChatService = aiChatService;
    }

    // 클라이언트로부터 채팅 메시지를 받아 AI 서버로 전달하고 응답 반환
    @PostMapping
    public ResponseEntity<ChatResponse> processChat(@RequestBody ChatRequest request) {
        // 1. 요청 전달
        ChatResponse response = aiChatService.processUserMessage(request);
        
        // 2. 결과 반환
        return ResponseEntity.ok(response);
    }
}