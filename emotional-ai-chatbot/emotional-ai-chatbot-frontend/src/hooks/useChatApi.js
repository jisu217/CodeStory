// 챗봇 API와 통신하는 Custom Hook

import { useState, useCallback } from 'react';
import { sendChatMessage } from '../api'; // 실제 API 요청 함수

export function useChatApi() {
  const [loading, setLoading] = useState(false); // API 요청 중 여부
  const [error, setError] = useState(null);      // 오류 정보

  // 서버로 메시지 전송
  const sendMessage = useCallback(async (messageText) => {
    setLoading(true);   // 요청 시작
    setError(null);     // 이전 오류 초기화

    try {
      // 실제 API 호출
      const response = await sendChatMessage(messageText);

      // 성공 시 서버 응답 반환
      return response.data;

    } catch (err) {
      setError(err);       // 오류 상태 저장
      console.error("API 통신 오류:", err);
      return null;

    } finally {
      setLoading(false);   // 요청 종료
    }

  }, []);

  return { sendMessage, loading, error };
}
