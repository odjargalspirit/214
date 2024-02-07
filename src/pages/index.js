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
      if (persuadeCount === persuadeTexts.length - 1) {
        setShowҮгүйButton(false);
      }
    } else {
      setТиймButtonSize(1); // Reset button size when the user clicks "Тийм"
      setPersuadeText('');
      setShowҮгүйButton(false);
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
        Чи надтай болзоонд явах уу?
      </h1>
