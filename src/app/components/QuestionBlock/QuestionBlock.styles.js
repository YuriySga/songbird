import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles({
  questionBlock: {
    backgroundColor: '#303030',
    padding: '16px',
    marginBottom: '25px',
    borderRadius: '4px',
  },
  birdImage: {
    objectFit: 'cover',
    width: '200px',
    height: '155px',
    borderRadius: '10px',
  },
  questionBlockList: {
    flexGrow: 1,
    listStyle: 'none',
    fontSize: '32px',
    fontWeight: '500',
  },
  questionBlockListName: {
    borderBottom: 'solid 1px #555555',
  },
  questionBlockPlayer: {
    backgroundColor: 'inherit',
    width: '100%',
    boxShadow: 'none',
    padding: '0px',
  },
});
