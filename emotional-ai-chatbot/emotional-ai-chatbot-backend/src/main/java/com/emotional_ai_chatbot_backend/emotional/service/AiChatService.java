// AI 서버와 통신하고 채팅 로직을 처리하는 서비스 계층

package com.emotional_ai_chatbot_backend.emotional.service;;

import com.emotional_ai_chatbot_backend.emotional.domain.ChatResponse; 
import com.emotional_ai_chatbot_backend.emotional.domain.ChatRequest;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class AiChatService {

    // AI 서버 주소 가져오기
    @Value("${ai.server.url}")
    private String aiServerUrl; 

    private final RestTemplate restTemplate;

    // RestTemplate DI
    public AiChatService(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }

    public ChatResponse processUserMessage(ChatRequest request) {
        // ChatRequest를 AI 서버에 전달
        
        // 임시(mock) 응답
        ChatResponse mockResponse = new ChatResponse();
        mockResponse.setOriginalMessage(request.getMessage());
        mockResponse.setEmotion("기쁨"); 
        mockResponse.setAiResponse("AI 챗봇 응답 메시지입니다.");
        
        return mockResponse;
    }
}