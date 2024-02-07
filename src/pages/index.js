import React, { useState, useEffect } from 'react';
import Confetti from 'react-dom-confetti';
import DateInputPage from './DateInputPage'; // Import the new component
import { Analytics } from '@vercel/analytics/react';
import useTripleClick from './useTripleClick'; // Import the custom hook

const ValentinePage = () => {
  const [yesButtonSize, setYesButtonSize] = useState(1);
  const [persuadeText, setPersuadeText] = useState('');
  const [persuadeCount, setPersuadeCount] = useState(0);
  const [showNoButton, setShowNoButton] = useState(true);
  const [showThanks, setShowThanks] = useState(false);
  const [showInputPage, setShowInputPage] = useState(false); // State for the new input page
  const [showCongrats, setShowCongrats] = useState(false); // State for the congratulations message
  const [showLeftConfetti, setShowLeftConfetti] = useState(false);

  useEffect(() => {
    if (showThanks) {
      setTimeout(() => setShowLeftConfetti(true), 200);
    }
  }, [showThanks]);

  const persuadeTexts = [
    'Чи итгэлтэй байна уу?',
    'Чи харамсаж магадгүй шүү!',
    'Үнэнээсээ юу? Дахиад боддоо!',
    'Алив л дээ битгий ичээ ! Боломж олго л доо!',
    'Би ямар их хөгжилтэй байхыг төсөөлдөө!',
    'Би амлая үнэхээр гоё байх болноо!',
    'Битгий боломжийг салхинд хийсгээрэй!',
    'Зүгээр л тийм гэж хэл?',
    'Чи үүнийг алгасахыг хүсэхгүй, Надад итгээрэй!',
    'Би үүнийг зөвхөн чамд л хийсэн!',
    'Тийм гэж хэлээд бүхнийг эхлүүлцгээе!',
    'Чи миний зүрхийг зүсэж байна!',
    'Би гунигт автлаа. Тийм гэж хэлээч!',
    'Сүүлийн боломж! Тийм гэж хэлээд миний өдрийг авар!',
    'Чи намайг сонголтгүй үлдээж байна! Тийм гэж хэл!'
  ];

  const handleClick = (answer) => {
    if (answer === 'Yes') {
      setYesButtonSize((prevSize) => prevSize + 0.4);
      setPersuadeText(persuadeTexts[persuadeCount]);
      setPersuadeCount((prevCount) => prevCount + 1);
      if (persuadeCount === persuadeTexts.length) {
        setShowNoButton(false);
      }
    } else {
      setYesButtonSize(1); // Reset button size when the user clicks "Yes"
      setPersuadeText('');
      setShowNoButton(false);
      // Trigger the "Thanks" animation
      setTimeout(() => setShowThanks(true), 100);
    }
  };

  const handleNextPage = () => {
    setShowInputPage(true);
  };

  const handleTripleClick = useTripleClick(() => {
    setShowCongrats(true); // Show the congratulations message
  });

  const handleCloseCongrats = () => {
    setShowCongrats(false); // Close the congratulations message
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <Analytics />
      <h1 style={{ color: 'black', fontSize: '2em' }}>
        Чи миний Валентин
        {/* Болох уу? */}
      </h1>
      <img
        src="/panda.gif"
        alt="Cute Panda"
        width="200"
        height="200"
        style={{ display: 'block', margin: 'auto', cursor: 'pointer' }}
        onClick={handleTripleClick} 
      />

      <div style={{ marginTop: '20px' }}>
        <button
          onClick={() => handleClick('Yes')}
          style={{
            fontSize: `${yesButtonSize}em`,
            backgroundColor: 'green',
            color: 'white',
            transition: 'font-size 0.5s',
            borderRadius: '10px',
          }}
        >
          Yes
        </button>
        {showNoButton && (
          <button
            onClick={() => handleClick('No')}
            style={{ backgroundColor: 'red', color: 'white', borderRadius: '10px' }}
          >
            {persuadeText || 'No'}
          </button>
        )}
      </div>

      {showCongrats && (
        <div
          style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            padding: '20px',
            borderRadius: '10px',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
            zIndex: '9999',
            cursor: 'pointer'
          }}
          onClick={handleCloseCongrats}
        >
          <p style={{ fontSize: '1.5em', color: 'black' }}>
            Congrats! You found the Easter egg. 🐣
          </p>
          <p style={{ fontSize: '1.2em', color: 'black' }}>
            Happy Valentine's Day!
          </p>
        </div>
      )}

      <div style={{ marginTop: 'auto', position: 'absolute', bottom: '0', width: '100%' }}>
        <p style={{ color: 'grey', fontSize: '10px' }}>
          Made with ❤️ by JRZ
        </p>
      </div>

      <style jsx>{`
        img {
          margin-top: 10px;
        }
        button {
          margin: 10px;
          padding: 10px;
        }
      `}</style>
    </div>
  );
};

export default ValentinePage;
