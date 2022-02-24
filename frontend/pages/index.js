import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Link,
  Typography,
} from '@material-ui/core';
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
        <main>
          <Container className={classes.cardGrid} maxWidth='lg'>
            <Grid container spacing={2}>
              {posts.map(post => (
                <Link key={post.id}>
                  <Grid item xs={6} sm={4} md={3}>
                    <Card>
                      <CardMedia></CardMedia>
                      <CardContent>
                        <Typography gutterBottom component='p'>
                          {post.title}
                        </Typography>
                        <Box component='p' fontSize={16} fontWeight={900}>
                          £{post.regular_price}
                        </Box>
                      </CardContent>
                    </Card>
                  </Grid>
                </Link>
              ))}
            </Grid>
          </Container>
        </main>
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
