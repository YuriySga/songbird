import React from 'react';
import PropTypes from 'prop-types';

export const Score = ({ score }) => {
  return <div className="score">Score: {score}</div>;
};

Score.propTypes = {
  score: PropTypes.number.isRequired,
};
