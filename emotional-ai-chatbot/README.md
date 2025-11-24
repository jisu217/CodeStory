# Emotional AI Chatbot_20251121

<img width="714" height="501" alt="2025 11 21" src="https://github.com/user-attachments/assets/76c9c1e1-81b5-40e7-91d6-ffdb02142807" />

## 1. 웹서버 - react
###   emotional-ai-chatbot-frontend   


- 프로젝트 구조
```
```

- 서버 실행
```
```  
  
## 2. 웹이랑 통신할 REST API 제작 - spring boot
###   emotional-ai-chatbot-backend   

- 프로젝트 구조
```
emotional-ai-chatbot-backend/
└── emotional/
    ├── controller/                               # API 요청 처리 (채팅 입력 수신)
    │   └── ChatController.java                   └── # 요청 수신 → 서비스 호출
    ├── service/                                  # 비즈니스 로직 (AI 서버 호출/데이터 가공)
    │   └── AIChatService.java                    └── # FastAPI AI 서버와 통신
    ├── domain/                                   # DTO, 응답/요청 모델
    │   └── ChatRequest.java                      └── # 클라이언트 요청 DTO
    │   └── ChatResponse.java                     └── # 클라이언트 응답 DTO
    └── EmotionalAiChatbotBackendApplication.java # Spring Boot 메인
└── resources/
            ├── application.properties            # 환경 설정 (AI 서버)
            └── static/  
```

- 서버 실행
```
./gradlew bootRun
```  
  
## 3. AI 서버랑 통신할 REST API 제작 - FastAPI 
###   emotional-ai-chatbot-ai-server   

- 프로젝트 구조
```
```

- 서버 실행
```
```
