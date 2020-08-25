import React from 'react';
import PropTypes from 'prop-types';

import { useStyles } from './EndGameBlock.style';
import sinica from '../../../assets/images/pticaSinica.jpg';
import { MAX_SCORE } from '../../App.models';

export const EndGameBlock = ({ score }) => {
  const styles = useStyles();

  return (
    <div className={`container ${styles.endGameBlock}`}>
      <h1 className={styles.congratulationTitle}>Поздравляем!</h1>
      <p className={styles.congratulationText}>Вы прошли викторину и набрали {score} из 30 возможных баллов</p>
      {score >= MAX_SCORE && <img className={styles.image} src={sinica} />}
    </div>
  );
};

EndGameBlock.propTypes = {
  score: PropTypes.number.isRequired,
};
