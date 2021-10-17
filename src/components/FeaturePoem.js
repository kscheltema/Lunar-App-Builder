import {Fragment, React} from "react";
import {Card, CardMedia, Divider, Grid, Hidden, Typography} from "@material-ui/core";
import PropTypes from 'prop-types';
import styles from "../ui/theme";
import book_tea from "../assets/book_tea.png";

function FeaturePoem(props) {
  const classes = styles();
  const { author, posts, title } = props;

  return (
<Fragment>  
  <Hidden smDown>
  {/* <Grid container item md={3} sm={12} direction="row" className={classes.rootMedium}> */}
  <Typography component="h5" variant="h5" className={classes.title} gutterBottom>
            {title}
  </Typography>
  <Typography variant="subtitle1" color="textSecondary" >
            {author}
  </Typography>
  {/* </Grid> */}
  <Divider />
  <Card className={classes.rootCard}>
  <Grid container md={12} direction="row"> 
  <Grid container className={classes.details} md={6} sm={12} > 
  <Grid item className={classes.rootMedium}>
    <Typography variant="subtitle3" >
      {posts}
    </Typography>
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
