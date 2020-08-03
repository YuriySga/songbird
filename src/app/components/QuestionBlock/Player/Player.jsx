import React from 'react';
import AudioPlayer, { RHAP_UI } from 'react-h5-audio-player';
import { PropTypes } from 'prop-types';

import 'react-h5-audio-player/lib/styles.css';
import { useStyles } from './Player.styles';

export const Player = ({ mp3 }) => {
  const styles = useStyles();
  return (
    <AudioPlayer
      className={styles.player}
      autoPlay
      src={mp3}
      layout="horizontal-reverse"
      showJumpControls={false}
      customControlsSection={[RHAP_UI.MAIN_CONTROLS]}
    />
  );
};

Player.propTypes = {
  mp3: PropTypes.string.isRequired,
};
