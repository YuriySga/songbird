/* eslint-disable no-unused-vars */
import React, { useState, useCallback } from 'react';

import { Header } from '../app/components/Header/Header';
import birdsData from './birdsData';
import { QuestionBlock } from './components/QuestionBlock/QuestionBlock';
import { AnswersVariantBlock } from './components/AnswersVariantBlock/AnswersVariantBlock';
import { RADIO_BTNS_VAL } from './App.models';
import { BirdDescriptionBlock } from './components/BirdDescriptionBlock/BirdDescriptionBlock';
import { useStyles } from './App.styles';
import { NextLevelButton } from './components/NextLevelButton/NextLevelButton';

export const App = () => {
  const [gameQuestionNum, setGameAnswerNum] = useState(0);
  const [score, setScore] = useState(55);
  const question = birdsData[gameQuestionNum][0];
  const answersVariant = birdsData[0];
  const [correctAnswerOnRound, setCorrectAnswerOnRound] = useState(birdsData[0][1]);
  const [answersRadioBtnsVal, setAnswersRadioBtnsVAL] = useState(
    new Array(answersVariant.length).fill(RADIO_BTNS_VAL.DEFAULT),
  );
  const [lastClickBird, setLastClickBird] = useState({});
  const styles = useStyles();

  const checkAnswerClick = useCallback(
    e => {
      const id = Number(e.target.dataset.id);
      const clickIndex = answersVariant.findIndex(item => item.id === id);
      const clickBird = Object.assign({}, answersVariant[clickIndex]);

      if (lastClickBird.id === clickBird.id) return;
      setLastClickBird(clickBird);

      const radioBtnsVal = answersRadioBtnsVal.slice();

      if (id === correctAnswerOnRound.id) {
        radioBtnsVal[clickIndex] = RADIO_BTNS_VAL.CORRECT;
        setAnswersRadioBtnsVAL(radioBtnsVal);
        return;
      }
      radioBtnsVal[clickIndex] = RADIO_BTNS_VAL.INCORRECT;
      setAnswersRadioBtnsVAL(radioBtnsVal);
    },
    [answersRadioBtnsVal, answersVariant, correctAnswerOnRound, lastClickBird],
  );

  return (
    <div className={`${styles.wrapper} container`}>
      <Header score={score} gameQuestionNum={gameQuestionNum} />
      <QuestionBlock question={question} />
      <AnswersVariantBlock
        answersVariant={answersVariant}
        answersRadioBtnsVal={answersRadioBtnsVal}
        question={question}
        checkAnswerClick={checkAnswerClick}
      />
      <BirdDescriptionBlock lastClickBird={lastClickBird} />
      <NextLevelButton className="555" />
    </div>
  );
};
