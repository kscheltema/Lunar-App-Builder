import {Fragment} from "react";
import {Grid, Hidden} from "@material-ui/core";
import styles from "../ui/theme";

function About() {
    const classes = styles();
    return (
        <Fragment>
            <Hidden smDown>
            <section className="About Small">
                <Grid container md={12} justify="center" direction="row">
                
                </Grid>
            </section>
            </Hidden>

      <Hidden mdUp>
      <section className="About Medium">
  
  </section>
  </Hidden>
      </Fragment>
    );
  }
  
  export default About;
  