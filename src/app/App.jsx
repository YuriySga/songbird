/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

import { Header } from '../app/components/Header/Header';
import birdsData from './birdsData';
import { QuestionBlock } from './components/QuestionBlock/QuestionBlock';
import { useStyles } from './components/Header/Header.styles';

export const App = () => {
  const [gameQuestionNum, setGameAnswerNum] = useState(0);
  const [score, setScore] = useState(55);
  const question = birdsData[0][0];
  const styles = useStyles();

  return (
    <div className={styles.wrapper}>
      <Header score={score} gameQuestionNum={gameQuestionNum} />
      <QuestionBlock question={question} />
    </div>
  );
};
