import os
from dotenv import load_dotenv
import google.generativeai as genai
from typing import List, Dict
from app.models.chat import ChatMessage

# .env 파일에서 환경 변수 로드
load_dotenv()

class GeminiService:
    def __init__(self):
        api_key = os.getenv("GOOGLE_API_KEY")
        if not api_key:
            raise ValueError("GOOGLE_API_KEY environment variable is not set")

        genai.configure(api_key=api_key)
        self.model = genai.GenerativeModel('gemini-2.0-flash')

    async def generate_response(
        self,
        message: str,
        conversation_history: List[ChatMessage] = None
    ) -> Dict[str, str]:
        """
        Generate a response using Google Gemini API
        """
        try:
            # 대화 내역을 포함한 프롬프트 구성
            prompt = self._build_prompt(message, conversation_history)

            # Gemini API 호출
            response = self.model.generate_content(prompt)

            return {
                "response": response.text,
                "emotion": self._detect_emotion(response.text),
                "confidence": 0.85  # 실제로는 감정 분석 모델의 신뢰도
            }
        except Exception as e:
            raise Exception(f"Error generating response: {str(e)}")

    def _build_prompt(
        self,
        message: str,
        conversation_history: List[ChatMessage] = None
    ) -> str:
        """
        Build prompt with conversation history
        """
        system_prompt = """당신은 사용자의 감정을 이해하고 공감하는 감성 AI 챗봇입니다.
사용자의 메시지를 분석하여 감정 상태를 파악하고, 따뜻하고 공감적인 답변을 제공하세요.
답변은 한국어로 작성하며, 친근하면서도 전문적인 톤을 유지하세요."""

        prompt_parts = [system_prompt]

        # 대화 내역 추가
        if conversation_history:
            for msg in conversation_history:
                prompt_parts.append(f"{msg.role}: {msg.content}")

        # 현재 메시지 추가
        prompt_parts.append(f"User: {message}")
        prompt_parts.append("Assistant:")

        return "\n\n".join(prompt_parts)

    def _detect_emotion(self, text: str) -> str:
        """
        Simple emotion detection (can be enhanced with dedicated models)
        """
        # 간단한 키워드 기반 감정 분석 (실제로는 더 정교한 모델 사용 가능)
        emotions = {
            "happy": ["기쁘", "행복", "좋아", "즐거", "웃"],
            "sad": ["슬프", "우울", "힘들", "아프", "눈물"],
            "angry": ["화", "짜증", "분노", "싫어"],
            "anxious": ["걱정", "불안", "두려", "무서"],
            "neutral": []
        }

        text_lower = text.lower()
        for emotion, keywords in emotions.items():
            if any(keyword in text_lower for keyword in keywords):
                return emotion

        return "neutral"
