import {Fragment} from "react";
import {Grid, Hidden} from "@material-ui/core";
import styles from "../ui/theme";

function Home() {
    const classes = styles();
    return (
        <Fragment>
            <Hidden smDown>
            <section className="Home Small">
                <Grid container md={12} justify="center" direction="row">
                
                </Grid>
            </section>
            </Hidden>

      <Hidden mdUp>
      <section className="Home Medium">
  
  </section>
  </Hidden>
      </Fragment>
    );
  }
  
  export default Home;
  