import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles({
  headerAnswersList: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    listStyle: 'none',
  },
  answer: {
    backgroundColor: 'green',
    width: '-webkit-fill-available',
  },
  active: {
    backgroundColor: 'greenyellow',
  },
});
