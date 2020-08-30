import { createUseStyles } from 'react-jss';

import { GAME_STATUS } from '../../App.models';

export const useStyles = createUseStyles({
  nextLevelButton: {
    width: '100%',
    margin: '0 0 25px 0',
    backgroundColor: gameStatus => gameStatus !== GAME_STATUS.WAITING && '#00bc8c',
    backgroundImage: 'unset',
  },
});
