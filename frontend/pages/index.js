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
      <main>
        <Container className={classes.cardGrid} maxWidth='lg'>
          <Grid container spacing={2}>
            {posts.map(post => (
              <Link
                key={post.id}
                href={`product/${encodeURIComponent(post.slug)}`}>
                <Grid item xs={6} sm={12} md={12}>
                  <Card className={classes.card} elevation={0}>
                    <CardMedia
                      className={classes.cardMedia}
                      image={post.product_image[0].image}
                      title='Image title'
                      alt={post.product_image[0].alt_text}
                    />
                    <img
                      src={post.product_image[0].image}
                      alt='this is test img'
                    />
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
