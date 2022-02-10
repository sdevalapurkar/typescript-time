import {
  Box,
  AppBar,
  Toolbar
} from '@material-ui/core';
import makeStyles from '@material-ui/core/styles/makeStyles';
import parakeetImage from '../images/parakeet-pic.png';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles(() => ({
  header: {
    borderBottom: '2px solid #00a152'
  },
  headerToolbar: {
    height: '70px'
  },
  brand: {
    paddingLeft: '1rem',
    display: 'flex',
    flex: '0 0 auto',
    alignItems: 'center',
    color: 'inherit',
    textDecoration: 'none',
    fontSize: '1.25rem',
    fontWeight: 700,
    '& img': {
      verticalAlign: 'middle'
    },
    '& picture': {
      marginLeft: '1.25rem'
    },
    '&:hover': {
      textDecoration: 'none'
    },
    '&:focus': {
      outlineOffset: '6px'
    }
  },
  cursor: {
    cursor: 'pointer'
  }
}));

function Header() {
  const classes = useStyles();
  const history = useHistory();

  return (
    <AppBar position="sticky" style={{ boxShadow: 'none' }}>
      <Box className={classes.header}>
        <Toolbar className={classes.headerToolbar}>
          <Box display="flex" justifyContent="space-between" width="100%">
            <Box display="flex" className={classes.cursor} onClick={() => history.push('/')}>
              <picture>
                <source srcSet={parakeetImage} media="(min-width: 600px)"></source>
                <img src={parakeetImage} alt={'Parakeet'} height="30px" />
              </picture>
              <span className={classes.brand}>
                Bird Tracker
              </span>
            </Box>
          </Box>
        </Toolbar>
      </Box>
    </AppBar>
  );
}

export default Header;
