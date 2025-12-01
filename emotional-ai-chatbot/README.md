# Emotional AI Chatbot_20251121

<img width="714" height="501" alt="2025 11 21" src="https://github.com/user-attachments/assets/76c9c1e1-81b5-40e7-91d6-ffdb02142807" />

## 1. 웹서버 - react
###   emotional-ai-chatbot-frontend   


- 프로젝트 구조
```
emotional-ai-chatbot-frontend/
├── public/                    # 정적 파일
├── src/
│   ├── assets/                # 이미지, 아이콘 등 리소스
│   ├── components/            # UI 컴포넌트 모음
│   │   ├── ChatInput.js       # 입력창 컴포넌트
│   │   ├── ChatWindow.js      # 전체 채팅 영역
│   │   ├── Header.js          # 상단 헤더
│   │   ├── Message.js         # 메시지 버블 렌더링
│   │   └── ...
│   ├── context/
│   │   ├── ChatContext.js     # Context 생성
│   │   └── ChatProvider.js    # 메시지 상태 관리 + API 호출
│   ├── hooks/
│   │   └── useChatApi.js      # API 호출 로직 커스텀 훅
│   ├── pages/
│   │   └── ChatbotPage.js     # 챗봇 메인 페이지
│   ├── App.js                 # 루트 컴포넌트
│   └── index.js               # 앱 진입파일
├── package.json
└── README.md
```

- 서버 실행
```
npm start
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
app/                          # 애플리케이션 핵심 로직
├── main.py                   # FastAPI 앱 엔트리 포인트
│
├── api/                      # API 엔드포인트 정의
│   └── v1/                   # API 버전 관리
│       ├── __init__.py       # 패키지 초기화
│       └── endpoints.py      # 채팅 관련 API 요청 처리
│
├── services/                 # 핵심 비즈니스 로직 
│   └── chat_service.py       # AI 처리 로직 구현
│
├── models/                   # 데이터 모델
│   └── schemas.py            # 스키마 정의
│
├── core/                     # 설정 및 공통 유틸리티
│   └── config.py             # 환경 변수 및 설정 관리
│
tests/                      
requirements.txt              # 프로젝트 의존성
README.md                  
```

- 서버 실행
```
uvicorn app.main:app --reload
```
