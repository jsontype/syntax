'use client'

export default function SetCookieButton({ token, content }: { token: string; content: string }) {
  const setLoginToken = async (token: string, content: string) => {
    try {
      const response = await fetch('/api/setCookie', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token, content }),
      });
      if (!response.ok) {
        throw new Error('Failed to set cookie');
      }
    } catch (error) {
      console.error('Error setting cookie:', error);
    }
  };

  return (
    <button className="cursor-pointer" onClick={() => setLoginToken(token, content)}>
      로그인 토큰 설정 📍
    </button>
  )
}
