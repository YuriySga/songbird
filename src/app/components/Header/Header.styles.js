import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles({
  header: {
    display: 'flex',
    flexWrap: 'wrap',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    fontFamily: 'Gloria Hallelujah',
    fontSize: '41px',
    '&>span': {
      color: '#009c75',
    },
  },
});
