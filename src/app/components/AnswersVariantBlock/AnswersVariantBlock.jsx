import React, { useCallback } from 'react';
import { PropTypes } from 'prop-types';

import { useStyles } from './AnswersVariantBlock.styles';

export const AnswersVariantBlock = ({ answersVariant, answersRadioBtnsVal, checkAnswerClick }) => {
  const styles = useStyles();

  const clickOnAnswer = useCallback(e => checkAnswerClick(e), [checkAnswerClick]);
  return (
    <ul className={styles.answersList} onClick={e => clickOnAnswer(e)}>
      {answersVariant.map((bird, birdIndex) => {
        const spanBtnColor = `color_${answersRadioBtnsVal[birdIndex]}`;
        return (
          <li className={styles.answer} key={bird.name} data-id={bird.id}>
            <span className={`${styles.answerRadioBtn} ${styles[spanBtnColor]}`}></span>
            {bird.name}
          </li>
        );
      })}
    </ul>
  );
};

AnswersVariantBlock.propTypes = {
  answersVariant: PropTypes.array.isRequired,
  checkAnswerClick: PropTypes.func.isRequired,
  answersRadioBtnsVal: PropTypes.array.isRequired,
};
