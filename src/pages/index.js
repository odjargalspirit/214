import React, { useState, useEffect } from 'react';
import Confetti from 'react-dom-confetti';
import DateInputPage from './DateInputPage'; // Import the new component
import { Analytics } from '@vercel/analytics/react';
import useTripleClick from './useTripleClick'; // Import the custom hook


const ValentinePage = () => {
  const [ТиймButtonSize, setТиймButtonSize] = useState(1);
  const [persuadeText, setPersuadeText] = useState('');
  const [persuadeCount, setPersuadeCount] = useState(0);
  const [showҮгүйButton, setShowҮгүйButton] = useState(true);
  const [showThanks, setShowThanks] = useState(false);
  const [showInputPage, setShowInputPage] = useState(false); // State for the new input page
  const [showEE, setShowEE] = useState(false); // State for the Easter egg
  const [showLeftConfetti, setShowLeftConfetti] = useState(false);


  useEffect(() => {
    if (showThanks) {
      setTimeout(() => setShowLeftConfetti(true), 200);
    }
  }, [showThanks]);

  const persuadeTexts = [
   'Чи итгэлтэй байна уу? ',
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
    if (answer === 'Үгүй') {
      setТиймButtonSize((prevSize) => prevSize + 0.4);
      setPersuadeText(persuadeTexts[persuadeCount]);
      setPersuadeCount((prevCount) => prevCount + 1);
      if (persuadeCount === persuadeTexts.length) {
        setShowҮгүйButton(false);
      }
    } else {
      setТиймButtonSize(1); // Reset button size when the user clicks "Тийм"
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
    setShowEE(true); // Show the Easter egg message
  });

  const handleCloseEE = () => {
    setShowEE(false); // Close the Easter egg message
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
        style={{ display: 'block', margin: 'auto', cursor: 'arrow' }}
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
        {showҮгүйButton && (
          <button
            onClick={() => handleClick('No')}
            style={{ backgroundColor: 'red', color: 'white', borderRadius: '10px', }}
          >
            {persuadeText || 'No'}
          </button>
        )}
      </div>

      {showБаярлалаа && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'lavender',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            opacity: 0,
            animation: 'fadeIn 2s forwards',
          }}
        >
          <Confetti
            active={showLeftConfetti }
            config={{
              angle: 90,
              spread: 360,
              startVelocity: 45,
              elementCount: 240, // Adjust element count as needed
              decay: 0.7,
            }}
          />
          <Confetti
            active={showLeftConfetti}
            config={{
              angle: 180,
              spread: 360,
              startVelocity: 40,
              elementCount: 140, // Adjust element count as needed
              decay: 0.9,
            }}
          />
          <h2 style={{ color: 'darkslategray', fontSize: '2em' }}>
            Миний Валентин болсонд баярлалаа! Удахгүй уулзацгаая! 🥰
          </h2>
          <button
            onClick={handleNextPage}
            style={{
              backgroundColor: 'violet',
              color: 'white',
              borderRadius: '100%',
              paddingBottom: '30px',
              marginTop: '15px',
              paddingTop: '30px',
              paddingRight: '40px',
              paddingLeft: '40px',
              cursor: 'pointer',
              fontSize: '2em',
            }}
          >
            ➔
          </button>
        </div>
      )}
      {showInputPage && <DateInputPage />} {/* Render the new input page component */}
      {showEE && (
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
            cursor:'arrow'
          }}
          onClick={handleCloseEE}
        >
          <p style={{ fontSize: '1.5em', color: 'black' }}>
            Glad! You found it. 🐣
          </p>
          <p style={{ fontSize: '1.2em', color: 'black' }}>
            Happy Valentine's Day, JRZ! ❤️
          </p>
        </div>
      )}

      <div style={{ marginTop: 'auto', position: 'absolute', bottom: '0', width: '100%' }}>
        <p style={{ color: 'grey', fontSize: '10px' }}>
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

        @keyframes fadeIn {
          to {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default ValentinePage;
