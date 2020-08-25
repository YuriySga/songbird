import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles({
  birdDescriptionBlock: {
    display: 'flex',
    flexWrap: 'wrap',
    padding: '16px 16px 16px 16px',
    backgroundColor: '#303030',
    borderRadius: '4px',
    border: '1px solid #444444',
    minWidth: '200px',
    height: '100%',
  },
  birdDescriptionImgWrapper: {
    '@media (max-width: 1200px)': {
      width: '50%',
    },
  },
  birdDescriptionImgEndListWrapper: {
    justifyContent: 'space-between',
    display: 'flex',
    flexWrap: 'wrap',
    width: '100%',
  },
  birdDescriptionBlockImgWrapper: {
    flexGrow: '1',
    '@media (max-width: 991px)': {
      textAlign: 'center',
    },
    '@media (max-width: 767px)': {
      flexGrow: '0',
    },
    '@media (max-width: 575px)': {
      width: '100%',
    },
  },
  birdDescriptionImg: {
    width: '200px',
    height: '155px',
    objectFit: 'cover',
    borderRadius: '10px',
    '@media (max-width: 767px)': {
      marginRight: '15px',
    },
  },
  birdDescriptionList: {
    flexGrow: '1',
    marginBottom: '0px',
    listStyle: 'none',
    '& li:nth-child(-n+2)': {
      borderBottom: 'solid 1px #555555',
      color: '#d3d3d3',
    },
    '& li': {
      padding: '4px',
      marginBottom: '8px',
    },
  },
  birdDescriptionText: {
    width: '100%',
  },
  birdDescriptionName: {
    fontSize: '23px',
    fontWeight: '500px',
  },
  descriptionPlayer: {
    backgroundColor: 'inherit',
    width: '100%',
    minWidth: 'unset',
    height: '53px',
    boxShadow: 'none',
    padding: '0px',
  },
});
