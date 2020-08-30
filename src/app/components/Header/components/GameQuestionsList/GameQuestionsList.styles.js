import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles({
  headerQuestionsList: {
    display: 'flex',
    flexWrap: 'wrap',
    fontSize: '15px',
    textAlign: 'center',
    width: '100%',
    listStyle: 'none',
    marginBottom: '25px',
    borderRadius: '5px',
    backgroundColor: '#008966',
    borderColor: '#007c5d',
    overflow: 'hidden',
  },
  question: {
    flexGrow: '1',
  },
  questionLink: {
    backgroundImage: 'unset !important',
    whiteSpace: 'nowrap',
    border: '0px',
    cursor: 'default',
    '&:focus': {
      boxShadow: 'unset',
    },
  },
  active: {
    backgroundColor: '#00bc8c',
    '&:hover': {
      backgroundColor: '#00bc8c',
    },
  },
});
