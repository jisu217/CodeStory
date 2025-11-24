// 전역 메시지 상태 관리 + API 연동
// Context를 통해 하위 컴포넌트에 메시지, 전송 함수, 로딩 상태 제공

import React, { createContext, useContext, useState } from 'react';
import { useChatApi } from '../hooks/useChatApi';

// 1) 전역 상태 공유용 Context 생성
const ChatContext = createContext(null);

// 2) Context 사용을 쉽게 해주는 Custom Hook
export const useChat = () => useContext(ChatContext);

// 3) Provider: 메시지 상태 관리 + API 호출
export const ChatProvider = ({ children }) => {
  const [messages, setMessages] = useState([]); 
  const { sendMessage: sendApiMessage, loading } = useChatApi();

  // 사용자 메시지 전송 + 봇 응답 처리
  const handleSendMessage = async (text) => {
    if (!text.trim() || loading) return; // 공백 메시지/로딩 중이면 무시

    // ① 사용자 메시지 화면에 추가
    setMessages(prev => [...prev, { id: Date.now(), text, sender: 'user' }]);

    // ② API 호출 → 봇 응답 받기
    const apiResponse = await sendApiMessage(text);

    // ③ 봇 메시지 추가
    if (apiResponse) {
      setMessages(prev => [
        ...prev,
        {
          id: Date.now() + 1,
          text: apiResponse.response,
          sender: 'bot',
          emotion: apiResponse.emotion, // 감정 분석 결과
        }
      ]);
    }
  };

  // Context로 제공할 값
  const value = { messages, handleSendMessage, loading };

  return (
    <ChatContext.Provider value={value}>
      {children} {/* 하위 컴포넌트에서 messages, handleSendMessage 사용 가능 */}
    </ChatContext.Provider>
  );
};
