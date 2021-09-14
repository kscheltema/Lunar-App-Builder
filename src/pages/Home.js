import {Fragment} from "react";
import CustomAppBar from "../components/CustomAppBar";
import {Card, CardMedia, Grid, Typography} from "@material-ui/core";
import styles from "../ui/theme";
import book_tea from "../assets/book_tea.png";

function Home() {
  const classes = styles();

  return (
<Fragment>  
  <CustomAppBar />
  <Card className={classes.root}>
  <Grid container className={classes.details} md={6}> 
  <Typography component="h5" variant="h5">
            Live From Space
  </Typography>
  <Typography variant="subtitle1" color="textSecondary">
            Mac Miller
  </Typography>
  </Grid>
    <Grid item md={6} direction="row"> 
  <CardMedia
        className={classes.cover}
        image={book_tea}
        title="book_tea"
      />
      </Grid>
  </Card>
</Fragment>
  );
}

export default Home;
