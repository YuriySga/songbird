import React from 'react';
import PropTypes from 'prop-types';

import { useStyles } from './GameQuestionsList.styles';
import { GAME_QUESTIONS } from '../../../../App.models';

export const GameQuestionsList = ({ gameRound }) => {
  const styles = useStyles();

  return (
    <ul className={`pagination ${styles.headerQuestionsList}`}>
      {GAME_QUESTIONS.map((question, questionIndex) => {
        return (
          <li className={`page-item ${styles.question}`} key={question}>
            <a className={`page-link ${styles.questionLink} ${questionIndex === gameRound && styles.active}`} href="#">
              {question}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

GameQuestionsList.propTypes = {
  gameRound: PropTypes.number.isRequired,
};
