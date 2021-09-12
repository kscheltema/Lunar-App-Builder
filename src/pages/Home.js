import {Fragment} from "react";
import {AppBar, Button, Grid, Hidden, IconButton, Toolbar, Typography} from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import styles from "../ui/theme";

function Home() {
    const classes = styles();
    
    return (
        <Fragment>
            <Hidden smDown>
            <section className="rootMedium">
                <Grid container md={12} justify="center" direction="row">
<AppBar position="static" variant="contained" color="none">
  <Toolbar className={classes.appBar}>
    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
      <MenuIcon />
    </IconButton>
    <Typography variant="h6" className={classes.title}>
      Seth's Poetry
    </Typography>
    <Button variant="contained" className={classes.buttonStyle}>Login</Button>
    <Button variant="contained" className={classes.buttonStyle}>Sing Up</Button>
  </Toolbar>
</AppBar>
                </Grid>
            </section>
            </Hidden>

      <Hidden mdUp>
      <section className="Home small">
  
  </section>
  </Hidden>
      </Fragment>
    );
  }
  
  export default Home;
  