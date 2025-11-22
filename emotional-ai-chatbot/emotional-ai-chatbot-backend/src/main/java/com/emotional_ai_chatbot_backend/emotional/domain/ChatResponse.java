package com.emotional_ai_chatbot_backend.emotional.domain;

import lombok.Getter;
import lombok.Setter;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ChatResponse {

    // 응답 메시지 내용을 담을 필드
    private String responseMessage;

    private String originalMessage; 
    private String emotion;         
    private String aiResponse;   
}