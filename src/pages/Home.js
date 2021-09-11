import {Fragment} from "react";
import {AppBar, Button, Grid, Hidden, IconButton, Toolbar, Typography} from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import styles from "../ui/theme";

function Home() {
    const classes = styles();
    
    return (
        <Fragment>
            <Hidden smDown>
            <section className="root">
                <Grid container md={12} justify="center" direction="row">
<AppBar position="static">
  <Toolbar>
    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
      <MenuIcon />
    </IconButton>
    <Typography variant="h6" className={classes.title}>
      Seth's Poetry
    </Typography>
    <Button color="inherit">Login</Button>
    <Button color="inherit">Sing Up</Button>
  </Toolbar>
</AppBar>
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
  