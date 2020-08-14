import React, { useEffect } from 'react';
import { PropTypes } from 'prop-types';

import blackbird from '../../../assets/images/blackbird.svg';
import { useStyles } from '../QuestionBlock/QuestionBlock.styles';
import * as GreenAudioPlayer from '../../../../node_modules/green-audio-player/dist/js/green-audio-player';
import { GAME_STATUS } from '../../App.models';

export const QuestionBlock = ({ questionEndAnswer, gameStatus }) => {
  const styles = useStyles();

  useEffect(() => {
    GreenAudioPlayer.init({
      selector: '.questionBlock',
      stopOthersOnPlay: true,
      showDownloadButton: false,
    });
  }, [questionEndAnswer]);

  return (
    <div className={styles.questionBlock}>
      <img
        className={styles.birdImage}
        src={gameStatus === GAME_STATUS.WAITING ? blackbird : questionEndAnswer.image}
        alt="bird"
      />
      <ul className={styles.questionBlockList}>
        <li>{gameStatus === GAME_STATUS.WAITING ? '******' : questionEndAnswer.name}</li>
        <li>
          <div className="questionBlock" key={questionEndAnswer.audio}>
            <audio autoPlay>
              <source src={questionEndAnswer.audio} type="audio/mpeg" allow="autoplay" />
            </audio>
          </div>
        </li>
      </ul>
    </div>
  );
};

QuestionBlock.propTypes = {
  questionEndAnswer: PropTypes.object.isRequired,
  gameStatus: PropTypes.string.isRequired,
};
