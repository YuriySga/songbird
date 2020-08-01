import React from 'react';
import PropTypes from 'prop-types';

import { useStyles } from './GameAnswersList.styles';
import { GAME_ANSWERS } from '../../../../App.models';

export const GameAnswersList = ({ gameAnswerNum }) => {
  const styles = useStyles();

  return (
    <ul className={styles.headerAnswersList}>
      {GAME_ANSWERS.map((answer, answerIndex) => {
        return (
          <li
            className={answerIndex === gameAnswerNum ? `${styles.answer} + ${styles.active}` : styles.answer}
            key={answer}
          >
            {answer}
          </li>
        );
      })}
    </ul>
  );
};

GameAnswersList.propTypes = {
  gameAnswerNum: PropTypes.number.isRequired,
};
