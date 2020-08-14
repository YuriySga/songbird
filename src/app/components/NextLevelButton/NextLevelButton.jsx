import React, { useCallback } from 'react';
import PropTypes from 'prop-types';

import { useStyles } from './NextLevelButton.styles';
import { GAME_STATUS } from '../../App.models';

export const NextLevelButton = ({ gameStatus, clickNextRoundButton }) => {
  const styles = useStyles();

  const click = useCallback(() => clickNextRoundButton(), [clickNextRoundButton]);

  return (
    <button
      disabled={gameStatus === GAME_STATUS.WAITING ? true : false}
      onClick={() => click()}
      type={'button'}
      className={`btn btn-primary ${styles.nextLevelButton}`}
    >
      NextLevel
    </button>
  );
};

NextLevelButton.propTypes = {
  gameStatus: PropTypes.string.isRequired,
  clickNextRoundButton: PropTypes.func.isRequired,
};
