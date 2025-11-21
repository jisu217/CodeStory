package com.yourcompany.chatbot.service;

import com.yourcompany.chatbot.model.ChatRequest;
import com.yourcompany.chatbot.model.ChatResponse;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Mono;

@Service
public class FastApiService {

    private final WebClient webClient;

    // application.properties에서 FastAPI 주소를 주입받음
    public FastApiService(WebClient.Builder webClientBuilder, 
                          @Value("${fastapi.base-url}") String fastapiBaseUrl) {
        this.webClient = webClientBuilder.baseUrl(fastapiBaseUrl).build();
    }

    // FastAPI의 /api/chat 엔드포인트 호출
    public Mono<ChatResponse> getEmotionalResponse(ChatRequest request) {
        return webClient.post()
                .uri("/api/chat")
                .body(Mono.just(request), ChatRequest.class)
                .retrieve()
                .bodyToMono(ChatResponse.class);
    }
}