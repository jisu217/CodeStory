// 개별 메시지 표시 (사용자 / 봇, 감정 태그 포함)

import React from 'react';

function Message({ text, sender, emotion }) {
  const isUser = sender === 'user'; // 메시지 보낸 사람 구분

  // 말풍선 스타일 결정
  const className = `message-bubble ${isUser ? 'user-message' : 'bot-message'} ${emotion || ''}`;

  return (
    <div className={`message-row ${isUser ? 'user-row' : 'bot-row'}`}>
      {/* 말풍선 */}
      <div className={className}>
        {text}

        {/* 봇 메시지의 감정 정보 표시 */}
        {!isUser && emotion && (
          <span className="emotion-tag"> [{emotion}]</span>
        )}
      </div>
    </div>
  );
}

export default Message;
