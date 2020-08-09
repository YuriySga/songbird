import React, { useEffect } from 'react';
import { PropTypes } from 'prop-types';

import blackbird from '../../../assets/images/blackbird.svg';
import { useStyles } from '../QuestionBlock/QuestionBlock.styles';
import * as GreenAudioPlayer from '../../../../node_modules/green-audio-player/dist/js/green-audio-player';

export const QuestionBlock = ({ question }) => {
  const styles = useStyles();

  useEffect(() => {
    GreenAudioPlayer.init({
      selector: '.questionBlock',
      stopOthersOnPlay: true,
      showDownloadButton: false,
    });
  }, []);

  return (
    <div className={styles.questionBlock}>
      <img className={styles.birdImage} src={blackbird} alt="bird" />
      <ul className={styles.questionBlockList}>
        <li>******</li>
        <li>
          <div className="questionBlock" key={question.audio}>
            <audio>
              <source src={question.audio} type="audio/mpeg" />
            </audio>
          </div>
        </li>
      </ul>
    </div>
  );
};

QuestionBlock.propTypes = {
  question: PropTypes.object.isRequired,
};
