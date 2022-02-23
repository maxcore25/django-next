import { makeStyles } from '@material-ui/core/styles';
import Header from '../components/Header';

const useStyles = makeStyles(theme => ({
  example: {
    color: '#ccc',
  },
  cardGrid: {
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    borderRadius: '0',
  },
  cardMedia: {
    paddingTop: '140%',
  },
}));

export default function Home() {
  const classes = useStyles();
  return (
    <>
      <Header />
      <div>Mike</div>
    </>
  );
}
