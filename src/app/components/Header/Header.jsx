import React from 'react';
import PropTypes from 'prop-types';

import { GameQuestionsList } from './components/GameQuestionsList/GameAnswersList';
import { Score } from './components/Score/Score';
import { useStyles } from './Header.styles';

export const Header = ({ score, gameQuestionNum }) => {
  const styles = useStyles();
  return (
    <div className={styles.header}>
      <div className="logo">SONGBIRD</div>
      <Score score={score} />
      <GameQuestionsList gameQuestionNum={gameQuestionNum} />
    </div>
  );
};

Header.propTypes = {
  score: PropTypes.number.isRequired,
  gameQuestionNum: PropTypes.number.isRequired,
};
