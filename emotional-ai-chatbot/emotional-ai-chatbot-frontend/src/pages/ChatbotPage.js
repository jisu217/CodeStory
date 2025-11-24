// ChatbotPage 컴포넌트: 챗봇 페이지 전체 구조

import React, { useState } from 'react';
import Header from '../components/Header/Header';
import ChatWindow from '../components/ChatWindow/ChatWindow';
import ChatInput from '../components/ChatInput/ChatInput';
import '../assets/styles/ChatbotPage.css';

function ChatbotPage() {
  // 초기 메시지
  const [messages, setMessages] = useState([
    { id: 1, text: "안녕하세요! 저는 감정 AI 챗봇입니다. 오늘, 당신의 기분은 어떤가요?", sender: 'bot', emotion: 'calm' },
    { id: 2, text: "요즘 일이 많아서 좀 지쳐요.", sender: 'user' }
  ]);

  // 메시지 전송 처리 (ChatInput에서 호출)
  const handleSendMessage = (text) => {
    if (!text.trim()) return;

    // ① 사용자 메시지 추가
    const newUserMessage = { id: messages.length + 1, text, sender: 'user' };
    setMessages(prev => [...prev, newUserMessage]);

    // ② 예시 봇 응답 (백엔드 API 호출 시 대체 예정)
    setTimeout(() => {
      const botResponse = {
        id: messages.length + 2,
        text: `당신이 '지쳤다'는 감정임을 감지했어요. 휴식이 필요해 보입니다.`,
        sender: 'bot',
        emotion: 'sympathy',
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);
  };

  return (
    <div className="chatbot-container">
      {/* 상단 타이틀 영역 */}
      <Header title="감정 AI 챗봇" />

      {/* 메시지 리스트 영역 */}
      <main className="chat-main">
        <ChatWindow messages={messages} />
      </main>

      {/* 입력창 영역 */}
      <ChatInput onSendMessage={handleSendMessage} />
    </div>
  );
}

export default ChatbotPage;
