from fastapi import FastAPI
from app.api.v1 import endpoints as v1_endpoints # 라우터 임포트

# FastAPI 인스턴스 생성
app = FastAPI(
    title="Emotional AI Chatbot Server",
    description="감정 분석 및 응답 생성을 위한 AI 서버",
    version="1.0.0",
)

# API 라우터 포함 (경로 접두사 설정)
app.include_router(
    v1_endpoints.router, 
    prefix="/api/v1", 
    tags=["chat"]
)

@app.get("/")
def read_root():
    return {"message": "Emotional AI Chatbot Server is running!"}