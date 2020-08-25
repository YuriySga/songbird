import React from 'react';
import PropTypes from 'prop-types';

import { useStyles } from './Score.styles';

export const Score = ({ score }) => {
  const style = useStyles();

  return <div className={style.score}>Score: {score}</div>;
};

Score.propTypes = {
  score: PropTypes.number.isRequired,
};
