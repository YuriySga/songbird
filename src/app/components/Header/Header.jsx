import React from 'react';
import PropTypes from 'prop-types';

import { GameQuestionsList } from './components/GameQuestionsList/GameQuestionsList';
import { Score } from './components/Score/Score';
import { useStyles } from './Header.styles';

export const Header = ({ score, gameRound }) => {
  const styles = useStyles();
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        SONG<span>BIRD</span>
      </div>
      <Score score={score} />
      <GameQuestionsList gameRound={gameRound} />
    </div>
  );
};

Header.propTypes = {
  score: PropTypes.number.isRequired,
  gameRound: PropTypes.number.isRequired,
};
