import {Fragment} from "react";
import {AppBar, Button, Grid, Hidden, IconButton, Toolbar, Typography} from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import styles from "../ui/theme";

function CustomAppBar() {
    const classes = styles();
    
    return (
        <Fragment>
            <Hidden smDown>
            <section className="rootMedium">
                <Grid container md={12} justify="center" direction="row">
<AppBar position="static" variant="contained" color="none">
  <Toolbar className={classes.appBar}>
    <IconButton edge="start" className={classes.menuButtonMD} color="inherit" aria-label="menu">
      <MenuIcon />
    </IconButton>
    <Typography variant="h5" className={classes.title}>
      Seth's Poetry
    </Typography>
    <Button variant="contained" className={classes.buttonStyle}>Login</Button>
    <Button variant="contained" className={classes.buttonStyle}>Sign Up</Button>
    <Button variant="contained" className={classes.buttonStyle}>Submit</Button>
  </Toolbar>
</AppBar>
                </Grid>
            </section>
            </Hidden>

      <Hidden mdUp>
      <section className="rootSmall">
      <Grid container sm={12} justify="center" direction="row">
<AppBar position="static" variant="contained" color="none">
  <Toolbar className={classes.appBarSM}>
    <IconButton edge="start" className={classes.menuButtonSM} color="inherit" aria-label="menu">
      <MenuIcon />
    </IconButton>
    <Typography variant="h5" className={classes.title}>
      Seth's Poetry
    </Typography>
    <Grid sm={4} container item direction="column">
    <Button variant="contained" className={classes.buttonStyle}>Login</Button>
    <Button variant="contained" className={classes.buttonStyle}>Sign Up</Button>
    <Button variant="contained" className={classes.buttonStyle}>Submit</Button>
    </Grid>
  </Toolbar>
</AppBar>
                </Grid>
  </section>
  </Hidden>
      </Fragment>
    );
  }
  
  export default CustomAppBar;
  