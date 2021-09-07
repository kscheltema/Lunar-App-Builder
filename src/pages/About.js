import {Fragment} from "react";
import {Grid, Hidden, Typography} from "@material-ui/core";
import test from "../assets/test.png";

function About() {
    return (
        <Fragment>
            <Hidden smDown>
            <section className="About Small">
                <Grid container md={12} justify="center" direction="row">
                    <Grid item md={6} >
                        <Grid>
                <Typography variant="h1">
                    About Us
                </Typography>
                        </Grid>
                        <Grid item md={6} >
                <Typography variant="subtitle2">
                    About Us
                </Typography>
                </Grid>
                </Grid>
                <Grid item md={6} >
                    <img src={test} alt="test" />
                </Grid>
                
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
  