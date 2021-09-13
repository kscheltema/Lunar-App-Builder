import {Fragment} from "react";
import CustomAppBar from "../components/CustomAppBar";
import {Card, CardMedia, Typography} from "@material-ui/core";
import styles from "../ui/theme";

function Home() {
  const classes = styles();

  return (
<Fragment>  
  <CustomAppBar />
  <Card className={classes.root}>
  <div className={classes.details}> 
  <Typography component="h5" variant="h5">
            Live From Space
  </Typography>
  <Typography variant="subtitle1" color="textSecondary">
            Mac Miller
  </Typography>
  </div>
  <CardMedia
        className={classes.cover}
        image="../assets/book_tea.png"
        title="Live from space album cover"
      />
  </Card>
</Fragment>
  );
}

export default Home;
