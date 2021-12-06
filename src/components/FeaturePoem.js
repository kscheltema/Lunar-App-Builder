import {Fragment, React, useCallback, useEffect, useState} from "react";
import {Button, Card, CardMedia, Divider, Grid, Hidden, Typography} from "@material-ui/core";
import PropTypes from 'prop-types';
import styles from "../ui/theme";
import book_tea from "../assets/book_tea.png";

function FeaturePoem(props) {
  const classes = styles();
  const { author, posts, title } = props; //convert into poems
  const [poems, setPoems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

 const fetchPoemHandler= useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch('https://seth-poetry-default-rtdb.europe-west1.firebasedatabase.app/poems.json');
      if (!response.ok) {
        throw new Error('Something went wrong!')
      }
      const data = await response.json(); 
      setPoems(data.results);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchPoemHandler();
  }, [fetchPoemHandler]);

  let content = <p>Found no Poems.</p>;
  if (poems.length > 0 ) {
    //content = poems.author
  }

  if (error) {
    content = <p>{error}</p>
  }

  if (isLoading) {
    content = <p>is loading...</p>
  }

  return (
<Fragment>  
  <Hidden smDown>
  <Typography component="h5" variant="h5" className={classes.title} gutterBottom>
            {title}
  </Typography>
  <Typography variant="subtitle1" color="textSecondary" >
            {author}
  </Typography>
  <Divider />
  <Card className={classes.rootCard}>
  <Grid container md={12} direction="row"> 
  <Grid container className={classes.details} md={6} sm={12} > 
  <Grid item className={classes.rootMedium}>
    <Typography variant="subtitle3" >{content}</Typography>
    <Grid container md={12} justifyContent="space-around">
    <Button onClick={fetchPoemHandler} variant="contained" className={classes.buttonStyle}>read more</Button>
    </Grid>
    </Grid>
  </Grid>
    <Grid container md={6} direction="row" justifyContent="space-around"> 
  <CardMedia
        className={classes.cover}
        image={book_tea}
        title="book_tea"
      />
      </Grid>
      </Grid>
  </Card>
  <Card className={classes.rootCard}>

  </Card>
  </Hidden>
</Fragment>
  );
}

FeaturePoem.propTypes = {
  posts: PropTypes.array,
  title: PropTypes.string,
};

export default FeaturePoem;
