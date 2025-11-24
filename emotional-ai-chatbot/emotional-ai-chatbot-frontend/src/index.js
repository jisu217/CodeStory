// React 애플리케이션 진입점

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// HTML의 root 요소 선택
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    {/* 최상위 App 컴포넌트 렌더링 */}
    <App />
  </React.StrictMode>
);
