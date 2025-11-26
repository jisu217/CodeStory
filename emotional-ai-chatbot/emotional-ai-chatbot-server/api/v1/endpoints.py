from fastapi import APIRouter
from app.models.schemas import ChatRequest, ChatResponse
from app.services.chat_service import chat_service # 서비스 객체 임포트

router = APIRouter()

@router.post("/chat", response_model=ChatResponse)
async def handle_chat_message(request: ChatRequest):
    """
    백엔드 서버로부터 받은 채팅 메시지를 처리하고, 
    감정 분석 및 응답 생성 결과를 반환합니다.
    """
    # 서비스 로직 호출
    ai_result = chat_service.process_chat(request.user_id, request.message)
    
    return ai_result