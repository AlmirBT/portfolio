// Временный тестовый файл для проверки базового рендеринга
import React from 'react'

function AppTest() {
  return (
    <div style={{ 
      minHeight: '100vh', 
      backgroundColor: '#0a0a0f', 
      color: 'white', 
      padding: '20px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <h1 style={{ fontSize: '48px', marginBottom: '20px' }}>Тест рендеринга</h1>
      <p>Если вы видите это сообщение, React работает!</p>
      <p style={{ marginTop: '20px', color: '#00ffff' }}>Проверьте консоль браузера (F12) на наличие ошибок</p>
    </div>
  )
}

export default AppTest
