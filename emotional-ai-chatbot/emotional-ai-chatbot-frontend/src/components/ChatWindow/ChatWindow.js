// 메시지 리스트를 화면에 출력하는 영역

import React from 'react';
import Message from '../Message/Message';

function ChatWindow({ messages }) {
  return (
    <div className="chat-window">
      {/* 전달받은 메시지 배열을 순서대로 렌더링 */}
      {messages.map((msg) => (
        <Message
          key={msg.id}          // 메시지 고유 ID
          text={msg.text}       // 메시지 내용
          sender={msg.sender}   // user 또는 bot
          emotion={msg.emotion} // 감정 분석 결과
        />
      ))}

      {/* 스크롤 하단 고정용 */}
      <div className="scroll-anchor" />
    </div>
  );
}

export default ChatWindow;
