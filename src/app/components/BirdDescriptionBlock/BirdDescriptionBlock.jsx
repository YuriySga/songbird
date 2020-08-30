import React, { useEffect } from 'react';
import { PropTypes } from 'prop-types';
import { useStyles } from './BirdDescriptionBlock.styles';

import * as GreenAudioPlayer from '../../../../node_modules/green-audio-player/dist/js/green-audio-player';

import '../../../../node_modules/green-audio-player/dist/css/green-audio-player.css';

export const BirdDescriptionBlock = ({ lastClickBird }) => {
  const styles = useStyles();

  useEffect(() => {
    GreenAudioPlayer.init({
      selector: '.birdDescriptionPlayer',
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
      <div className={styles.birdDescriptionImgEndListWrapper}>
        <div className={styles.birdDescriptionBlockImgWrapper}>
          <img className={styles.birdDescriptionImg} src={lastClickBird.image} />
        </div>
        <ul className={styles.birdDescriptionList}>
          <li className={styles.birdDescriptionName}>{lastClickBird.name}</li>
          <li>{lastClickBird.species}</li>
          <li className={styles.descriptionPlayerWrapper}>
            <div className={`birdDescriptionPlayer ${styles.descriptionPlayer}`} key={lastClickBird.audio}>
              <audio>
                <source src={lastClickBird.audio} type="audio/mpeg" />
              </audio>
            </div>
          </li>
        </ul>
      </div>
      <p className={styles.birdDescriptionText}>{lastClickBird.description}</p>
    </div>
  );
};

BirdDescriptionBlock.propTypes = {
  lastClickBird: PropTypes.object.isRequired,
};
