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
      selector: '.questionPlayer',
      stopOthersOnPlay: true,
      showDownloadButton: false,
    });
  }, [questionEndAnswer]);

  return (
    <div className="container">
      <div className={`row ${styles.questionBlock}`}>
        <div className={'col-md-4 col-lg-3 pl-0 text-center text-md-left'}>
          <img
            className={styles.birdImage}
            src={gameStatus === GAME_STATUS.WAITING ? blackbird : questionEndAnswer.image}
            alt="bird"
          />
        </div>
        <div className={'col-md-8 col-lg-9'}>
          <ul className={styles.questionBlockList}>
            <li className={styles.questionBlockListName}>
              {gameStatus === GAME_STATUS.WAITING ? '******' : questionEndAnswer.name}
            </li>
            <li>
              <div className={`${styles.questionBlockPlayer} questionPlayer`} key={questionEndAnswer.audio}>
                <audio>
                  <source src={questionEndAnswer.audio} type="audio/mpeg" allow="autoplay" />
                </audio>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

QuestionBlock.propTypes = {
  questionEndAnswer: PropTypes.object.isRequired,
  gameStatus: PropTypes.string.isRequired,
};
