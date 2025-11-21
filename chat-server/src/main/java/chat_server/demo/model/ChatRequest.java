package com.yourcompany.chatbot.model;

import java.util.List;

// FastAPI의 POST /api/chat 요청 본문 구조와 일치
public class ChatRequest {
    private String message;
    private List<ConversationItem> conversationHistory;

    public ChatRequest() {}

    public String getMessage() { return message; }
    public void setMessage(String message) { this.message = message; }

    public List<ConversationItem> getConversationHistory() { return conversationHistory; }
    public void setConversationHistory(List<ConversationItem> conversationHistory) { 
        this.conversationHistory = conversationHistory; 
    }
}