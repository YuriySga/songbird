import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles({
  birdDescriptionBlock: {
    display: 'flex',
    flexWrap: 'wrap',
    width: '50%',
    padding: '0 15px 0 15px',
    backgroundColor: '#303030',
    borderRadius: '4px',
    border: '1px solid #555',
  },
  birdDescriptionImgWrapper: {
    width: '50%',
  },
  birdDescriptionImg: {
    width: '200px',
    height: '155px',
    objectFit: 'cover',
  },
  birdDescriptionList: {
    width: '50%',
  },
  birdDescriptionText: {
    width: '100%',
  },
});
