import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

const useStyles = makeStyles(theme => ({
  appbarMain: {
    backgroundColor: '#2d2d2d',
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static' elevation={0} className={classes.appbarMain}>
        <Toolbar>
          <IconButton
            size='large'
            edge='start'
            color='inherit'
            aria-label='menu'
            sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Button color='inherit'>Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
