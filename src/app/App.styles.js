import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles({
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    flexGrow: '1',
    alignContent: 'baseline',
  },
  answersEndDescriptionBlock: {
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap',
  },
});
