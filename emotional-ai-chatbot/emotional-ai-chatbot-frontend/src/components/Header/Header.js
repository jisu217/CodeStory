// 챗봇 페이지 상단의 제목과 상태 표시

import React from 'react';

function Header({ title }) {
  return (
    <header className="chatbot-header">
      {/* 챗봇 제목 */}
      <h1>{title}</h1>

      {/* 상태 표시 (온라인/오프라인) */}
      <div className="status-indicator">온라인</div>
    </header>
  );
}

export default Header;
