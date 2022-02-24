import { Grid, Link } from '@material-ui/core';
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

function Home({ posts }) {
  const classes = useStyles();
  return (
    <>
      <Header />
      <div>
        <h2>My Store Items:</h2>
        {posts.map(post => (
          // <p key={post.id}>{post.title}</p>
          <Link key={post.id}>
            <Grid></Grid>
          </Link>
        ))}
      </div>
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch('http://127.0.0.1:8000/api/');
  const posts = await res.json();

  return {
    props: {
      posts,
    },
  };
}

export default Home;
