from pydantic import BaseModel

# 웹/백엔드 서버로부터 받을 요청 데이터 구조 (챗봇 입력)
class ChatRequest(BaseModel):
    user_id: str
    message: str

# 웹/백엔드 서버로 보낼 응답 데이터 구조 (AI 처리 결과)
class ChatResponse(BaseModel):
    response_message: str
    emotion: str # AI가 분석한 감정 결과 (e.g., 'joy', 'sadness')