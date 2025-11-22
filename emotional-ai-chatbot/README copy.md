# Emotional AI Chatbot

FastAPI와 Google Gemini API를 사용한 감성 AI 챗봇 프로젝트입니다.

## 프로젝트 구조

```
emotional-ai-chatbot/
├── main.py                 # FastAPI 애플리케이션 진입점
├── requirements.txt        # Python 의존성
├── .env.example           # 환경 변수 예시
├── .gitignore            # Git 제외 파일
└── app/
    ├── models/           # 데이터 모델
    │   └── chat.py
    ├── routes/           # API 라우트
    │   └── chat.py
    ├── services/         # 비즈니스 로직
    │   └── gemini_service.py
    └── utils/            # 유틸리티 함수
```

## 설치 및 실행

### 1. Python 가상환경 생성

```bash
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate
```

### 2. 의존성 설치

```bash
pip install -r requirements.txt
```

### 3. 환경 변수 설정

`.env.example` 파일을 `.env`로 복사하고 Google API 키를 설정합니다:

```bash
cp .env.example .env
```

`.env` 파일을 열고 API 키를 입력합니다:

```
GOOGLE_API_KEY=your_actual_api_key_here
```

Google API 키는 [Google AI Studio](https://makersuite.google.com/app/apikey)에서 발급받을 수 있습니다.

### 4. 서버 실행

```bash
uvicorn main:app --reload
```

서버가 실행되면 다음 주소로 접속할 수 있습니다:
- API: http://localhost:8000
- API 문서: http://localhost:8000/docs
- 대체 API 문서: http://localhost:8000/redoc

## API 엔드포인트

### POST /api/chat
감성 AI와 대화합니다.

**요청 본문:**
```json
{
  "message": "오늘 기분이 좋아요!",
  "conversation_history": [
    {
      "role": "user",
      "content": "안녕하세요"
    },
    {
      "role": "assistant",
      "content": "안녕하세요! 무엇을 도와드릴까요?"
    }
  ]
}
```

**응답:**
```json
{
  "response": "기분이 좋으시다니 정말 좋네요! 무엇이 기분을 좋게 만들었나요?",
  "emotion": "happy",
  "confidence": 0.85
}
```

### GET /api/chat/status
채팅 서비스 상태를 확인합니다.

### GET /health
서버 헬스 체크

## 기능

- Google Gemini API를 사용한 자연어 처리
- 대화 내역 관리
- 기본적인 감정 분석
- CORS 설정으로 프론트엔드 통합 지원
- FastAPI의 자동 API 문서화

## 개발

### 코드 스타일
PEP 8 스타일 가이드를 따릅니다.

### 테스트
```bash
pytest
```

## 라이센스
MIT License
