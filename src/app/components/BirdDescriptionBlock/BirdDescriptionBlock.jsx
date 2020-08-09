import React, { useEffect } from 'react';
import { PropTypes } from 'prop-types';
import { useStyles } from './BirdDescriptionBlock.styles';

import * as GreenAudioPlayer from '../../../../node_modules/green-audio-player/dist/js/green-audio-player';

import '../../../../node_modules/green-audio-player/dist/css/green-audio-player.css';

export const BirdDescriptionBlock = ({ lastClickBird }) => {
  const styles = useStyles();

  useEffect(() => {
    GreenAudioPlayer.init({
      selector: '.birdDescriptionBlock',
      stopOthersOnPlay: true,
      showDownloadButton: false,
    });
  }, [lastClickBird.audio]);

  if (!lastClickBird.id) {
    return (
      <div className={styles.birdDescriptionBlock}>
        Послушайте плеер.
        <br />
        Выберите птицу из списка.
      </div>
    );
  }

  return (
    <div className={styles.birdDescriptionBlock}>
      <div className={styles.birdDescriptionImgWrapper}>
        <img className={styles.birdDescriptionImg} src={lastClickBird.image} />
      </div>
      <ul className={styles.birdDescriptionList}>
        <li>{lastClickBird.name}</li>
        <li>{lastClickBird.species}</li>
        <li>
          <div className="birdDescriptionBlock" key={lastClickBird.audio}>
            <audio>
              <source src={lastClickBird.audio} type="audio/mpeg" />
            </audio>
          </div>
        </li>
      </ul>
      <p className={styles.birdDescriptionText}>{lastClickBird.description}</p>
    </div>
  );
};

BirdDescriptionBlock.propTypes = {
  lastClickBird: PropTypes.object.isRequired,
};
