import {Fragment} from "react";
import CustomAppBar from "../components/CustomAppBar";
import {Card, Typography} from "@material-ui/core";
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
  </div>
  </Card>
</Fragment>
  );
}

export default Home;
