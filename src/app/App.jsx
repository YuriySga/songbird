/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

import { Header } from '../app/components/Header/Header';
import { GAME_ANSWERS } from './App.models';
import birdsData from './birdsData';

export const App = () => {
  const [gameAnswerNum, setGameAnswerNum] = useState(0);
  const [score, setScore] = useState(55);
  return <Header score={score} gameAnswerNum={gameAnswerNum} />;
};
