import React from 'react';
import PropTypes from 'prop-types';

import { useStyles } from './GameQuestionsList.styles';
import { GAME_QUESTIONS } from '../../../../App.models';

export const GameQuestionsList = ({ gameRound }) => {
  const styles = useStyles();

  return (
    <ul className={styles.headerQuestionsList}>
      {GAME_QUESTIONS.map((question, questionIndex) => {
        return (
          <li
            className={questionIndex === gameRound ? `${styles.question} + ${styles.active}` : styles.question}
            key={question}
          >
            {question}
          </li>
        );
      })}
    </ul>
  );
};

GameQuestionsList.propTypes = {
  gameRound: PropTypes.number.isRequired,
};
