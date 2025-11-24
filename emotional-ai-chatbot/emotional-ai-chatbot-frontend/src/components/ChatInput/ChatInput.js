// 사용자 입력을 받아 부모 컴포넌트로 전송하는 입력창

import React, { useState } from 'react';

function ChatInput({ onSendMessage }) {
  // 입력창 상태
  const [input, setInput] = useState('');

  // 메시지 전송 처리
  const handleSubmit = (e) => {
    e.preventDefault();

    if (input.trim()) {
      onSendMessage(input); // 부모에게 메시지 전달
      setInput(''); // 입력창 초기화
    }
  };

  return (
    <form className="chat-input-form" onSubmit={handleSubmit}>
      {/* 사용자 입력 필드 */}
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="메시지를 입력하세요..."
      />

      {/* 입력값 없으면 전송 버튼 비활성화 */}
      <button type="submit" disabled={!input.trim()}>
        전송
      </button>
    </form>
  );
}

export default ChatInput;
