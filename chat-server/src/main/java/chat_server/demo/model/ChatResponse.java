package com.yourcompany.chatbot.model;

// FastAPI의 응답 구조와 일치
public class ChatResponse {
    private String response;
    private String emotion;
    private double confidence;

    public ChatResponse() {}

    public String getResponse() { return response; }
    public void setResponse(String response) { this.response = response; }

    public String getEmotion() { return emotion; }
    public void setEmotion(String emotion) { this.emotion = emotion; }

    public double getConfidence() { return confidence; }
    public void setConfidence(double confidence) { this.confidence = confidence; }
}