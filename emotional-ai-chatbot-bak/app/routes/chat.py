from fastapi import APIRouter, HTTPException
from app.models.chat import ChatRequest, ChatResponse
from app.services.gemini_service import GeminiService

router = APIRouter()
gemini_service = GeminiService()

@router.post("/chat", response_model=ChatResponse)
async def chat(request: ChatRequest):
    """
    Chat endpoint for emotional AI chatbot
    """
    try:
        result = await gemini_service.generate_response(
            message=request.message,
            conversation_history=request.conversation_history
        )

        return ChatResponse(
            response=result["response"],
            emotion=result.get("emotion"),
            confidence=result.get("confidence")
        )
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.get("/chat/status")
async def chat_status():
    """
    Check chat service status
    """
    return {"status": "operational", "service": "Gemini AI"}
