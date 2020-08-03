import React from 'react';
import { PropTypes } from 'prop-types';

import blackbird from '../../../assets/images/blackbird.svg';
import { useStyles } from '../QuestionBlock/QuestionBlock.styles';
import { Player } from './Player/Player';

export const QuestionBlock = ({ question }) => {
  const styles = useStyles();
  return (
    <div className={styles.questionBlock}>
      <img className={styles.birdImage} src={blackbird} alt="bird" />
      <ul className={styles.questionBlockList}>
        <li>******</li>
        <li>
          <Player mp3={question.audio} />
        </li>
      </ul>
    </div>
  );
};

QuestionBlock.propTypes = {
  question: PropTypes.object.isRequired,
};
