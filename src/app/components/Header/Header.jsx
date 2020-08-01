import React from 'react';
import PropTypes from 'prop-types';

import { GameAnswersList } from './components/GameAnswersList/GameAnswersList';
import { Score } from './components/Score/Score';
import { useStyles } from './Header.styles';

export const Header = ({ score, gameAnswerNum }) => {
  const styles = useStyles();
  return (
    <div className={styles.header}>
      <div className="logo">SONGBIRD</div>
      <Score score={score} />
      <GameAnswersList gameAnswerNum={gameAnswerNum} />
    </div>
  );
};

Header.propTypes = {
  score: PropTypes.number.isRequired,
  gameAnswerNum: PropTypes.number.isRequired,
};
