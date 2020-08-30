import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles({
  endGameBlock: {
    width: '100%',
    backgroundColor: '#303030',
    borderRadius: '4px',
    fontWeight: '300',
    textAlign: 'center',
    marginBottom: '25px',
  },
  image: {
    width: 'inherit',
    borderRadius: 'inherit',
    marginBottom: '15px',
  },
  congratulationTitle: {
    fontSize: '72px',
    fontWeight: 'inherit',
    '@media (max-width: 767px)': {
      fontSize: '48px',
    },
    '@media (max-width: 575px)': {
      fontSize: '32px',
    },
  },
  congratulationText: {
    fontSize: '18px',
    fontWeight: 'inherit',
  },
});
