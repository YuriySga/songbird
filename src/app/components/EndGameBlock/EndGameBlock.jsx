import React from 'react';
import PropTypes from 'prop-types';

import { useStyles } from './EndGameBlock.style';

export const EndGameBlock = ({ score }) => {
  const styles = useStyles();

  return (
    <div className={styles.endGameBlock}>
      Поздравляем! <br />
      Вы прошли викторину и набрали {score} из 30 возможных баллов
    </div>
  );
};

EndGameBlock.propTypes = {
  score: PropTypes.number.isRequired,
};
