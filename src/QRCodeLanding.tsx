import React from 'react';

import QRCode from './assets/images/image-qr-code.png'
import './QRCodeLanding.css'

const App: React.FC = () => {
  return (
    <div className='main-container'>
      <div className='qr-code-container'>
        <img src={QRCode} alt='qr code' className='qr-code' />
      </div>
      <div className='qr-code-text-container'>
        <p className='text-title'>Improve your front-end skills by building projects</p>
        <p className='text-description'>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
      </div>
    </div>
  );
}

export default App;
