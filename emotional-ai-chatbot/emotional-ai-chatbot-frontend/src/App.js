// React 애플리케이션 최상위 루트

import React from 'react';
import ChatbotPage from './pages/ChatbotPage';

function App() {
  return (
    <div className="App">
      {/*
        ChatbotPage를 렌더링
        나중에 전역 상태를 적용하려면 <ChatProvider>로 감싸면 됨
      */}
      <ChatbotPage />
    </div>
  );
}

export default App;
