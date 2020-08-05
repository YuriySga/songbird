import { createUseStyles } from 'react-jss';
import { RADIO_BTNS_VAL, RADIO_BTNS_COLORS } from '../../App.models';

export const useStyles = createUseStyles({
  answersList: {
    backgroundColor: '#303030',
    borderRadius: '4px',
    '& :first-child': {
      borderTopLeftRadius: '4px',
      borderTopRightRadius: '4px',
    },
    '& :last-child': {
      borderBottomLeftRadius: '4px',
      borderBottomRightRadius: '4px',
    },
  },
  answer: {
    display: 'flex',
    alignItems: 'baseline',
    border: '1px solid #555',
    padding: '14px 20px',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: '#464646',
    },
  },
  answerRadioBtn: {
    display: 'block',
    width: '10px',
    height: '10px',
    borderRadius: '50%',
    marginRight: '15px',
  },

  color_default: {
    backgroundColor: `${RADIO_BTNS_COLORS.get(RADIO_BTNS_VAL.DEFAULT)}`,
  },
  color_correct: {
    backgroundColor: `${RADIO_BTNS_COLORS.get(RADIO_BTNS_VAL.CORRECT)}`,
  },
  color_inCorrect: {
    backgroundColor: `${RADIO_BTNS_COLORS.get(RADIO_BTNS_VAL.INCORRECT)}`,
  },
});
