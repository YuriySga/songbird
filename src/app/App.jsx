import React, { useState, useCallback } from 'react';

import { Header } from '../app/components/Header/Header';
import birdsData from './birdsData';
import { QuestionBlock } from './components/QuestionBlock/QuestionBlock';
import { AnswersVariantBlock } from './components/AnswersVariantBlock/AnswersVariantBlock';
import { RADIO_BTNS_VAL, GAME_STATUS, MAX_GAME_ROUNDS, MAX_TRY_NUMBER, MAX_SCORE } from './App.models';
import { BirdDescriptionBlock } from './components/BirdDescriptionBlock/BirdDescriptionBlock';
import { useStyles } from './App.styles';
import { NextLevelButton } from './components/NextLevelButton/NextLevelButton';
import { EndGameBlock } from './components/EndGameBlock/EndGameBlock';

export const App = () => {
  const [gameRound, setGameRound] = useState(0);
  const [score, setScore] = useState(0);
  const [tryNumber, setTryNumber] = useState(MAX_TRY_NUMBER);
  const [questionEndAnswer, setQuestionEndAnswer] = useState(
    birdsData[gameRound][randomInteger(0, birdsData[gameRound].length - 1)],
  );
  const [answersVariant, setAnswersVariant] = useState(birdsData[gameRound]);
  const [gameStatus, setGameStatus] = useState(GAME_STATUS.WAITING);
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
      if (gameStatus === GAME_STATUS.ANSWER_CORRECT) return;

      const radioBtnsVal = answersRadioBtnsVal.slice();
      const userTry = tryNumber > 0 ? tryNumber - 1 : tryNumber;
      if (id === questionEndAnswer.id) {
        radioBtnsVal[clickIndex] = RADIO_BTNS_VAL.CORRECT;
        setAnswersRadioBtnsVAL(radioBtnsVal);
        setGameStatus(GAME_STATUS.ANSWER_CORRECT);
        setScore(score + userTry);
        return;
      }
      radioBtnsVal[clickIndex] = RADIO_BTNS_VAL.INCORRECT;
      setAnswersRadioBtnsVAL(radioBtnsVal);
      setTryNumber(userTry);
    },
    [answersRadioBtnsVal, answersVariant, questionEndAnswer, gameStatus, lastClickBird, score, tryNumber],
  );

  const clickNextRoundButton = useCallback(() => {
    if (gameStatus === GAME_STATUS.END_GAME) {
      startRound(0);
      return;
    }
    if (gameRound >= MAX_GAME_ROUNDS) {
      setGameStatus(GAME_STATUS.END_GAME);
      return;
    }
    startRound(gameRound + 1);
  }, [gameRound, gameStatus, startRound]);

  const startRound = useCallback(
    roundNum => {
      roundNum === 0 && setScore(0);
      setGameRound(roundNum);
      setTryNumber(MAX_TRY_NUMBER);
      setQuestionEndAnswer(birdsData[roundNum][randomInteger(0, birdsData[roundNum].length - 1)]);
      setAnswersVariant(birdsData[roundNum]);
      setGameStatus(GAME_STATUS.WAITING);
      setAnswersRadioBtnsVAL(new Array(answersVariant.length).fill(RADIO_BTNS_VAL.DEFAULT));
      setLastClickBird({});
    },
    [answersVariant],
  );

  return (
    <div className={`${styles.wrapper} container`}>
      <Header score={score} gameRound={gameRound} />
      {gameStatus === GAME_STATUS.END_GAME ? (
        <EndGameBlock score={score} />
      ) : (
        <>
          <QuestionBlock questionEndAnswer={questionEndAnswer} gameStatus={gameStatus} />
          <div className={'row'}>
            <div className={'col-md-6 mb-4'}>
              <AnswersVariantBlock
                answersVariant={answersVariant}
                answersRadioBtnsVal={answersRadioBtnsVal}
                questionEndAnswer={questionEndAnswer}
                checkAnswerClick={checkAnswerClick}
              />
            </div>
            <div className={'col-md-6 mb-4'}>
              <BirdDescriptionBlock lastClickBird={lastClickBird} />
            </div>
          </div>
        </>
      )}
      {gameStatus === GAME_STATUS.END_GAME && score >= MAX_SCORE ? (
        <></>
      ) : (
        <NextLevelButton gameStatus={gameStatus} clickNextRoundButton={clickNextRoundButton} score={score} />
      )}
    </div>
  );
};

const randomInteger = (min, max) => {
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};
