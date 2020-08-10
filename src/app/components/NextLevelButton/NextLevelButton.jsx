/* eslint-disable no-unused-vars */
import React from 'react';

import { useStyles } from './NextLevelButton.styles';

export const NextLevelButton = () => {
  const styles = useStyles();
  return (
    <button type={'button'} className={`btn btn-primary disabled ${styles.nextLevelButton}`}>
      NextLevel
    </button>
  );
};
