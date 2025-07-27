import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Cookies from 'js-cookie';

const CookieBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    if (!Cookies.get('cookieConsent')) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = (): void => {
    Cookies.set('cookieConsent', 'accepted', { expires: 30 });
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return ReactDOM.createPortal(
    <div
      style={{
        position: 'fixed',
        bottom: 0,
        width: '100%',
        background: '#fff',
        padding: '10px',
        boxShadow: '0 -2px 5px rgba(0,0,0,0.2)',
        textAlign: 'center',
      }}
    >
      <p>We use cookies to enhance your experience. Accept?</p>
      <button onClick={handleAccept}>Accept</button>
    </div>,
    document.getElementById('cookies-portal') as HTMLElement
  );
};

export default CookieBanner;