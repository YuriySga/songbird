import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles({
  headerQuestionsList: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    listStyle: 'none',
  },
  question: {
    backgroundColor: '#008966',
    width: '-webkit-fill-available',
  },
  active: {
    backgroundColor: '#00bc8c',
  },
});
