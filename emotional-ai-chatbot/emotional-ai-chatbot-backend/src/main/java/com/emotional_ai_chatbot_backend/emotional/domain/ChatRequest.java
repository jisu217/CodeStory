// 클라이언트가 보낸 채팅 요청 데이터를 담는 DTO

package com.emotional_ai_chatbot_backend.emotional.domain;

import lombok.Getter;
import lombok.Setter;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ChatRequest {
    // 사용자 ID 또는 세션 ID
    private String userId;
    
    // 사용자가 입력한 메시지 내용
    private String message;
}