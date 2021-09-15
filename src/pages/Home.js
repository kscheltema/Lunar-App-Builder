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
  <Grid container item md={6} direction="row">
  <Typography component="h5" variant="h5" className={classes.title}>
            Live From Space
  </Typography>
  <Typography variant="subtitle1" color="textSecondary" >
            Mac Miller
  </Typography>
  </Grid>
  <Grid container md={12} direction="row"> 
  <Grid container className={classes.details} md={6} > 
  <Grid>
    <Typography variant="subtitle3">
      Sun bathe experiences short bursts of poo-phoria after going to the loo for cough but push your water glass on the floor. Groom yourself 4 hours - checked, have your beauty sleep 18 hours - checked, be fabulous for the rest of the day - checked i love cuddles that box? i can fit in that box so jump around on couch, meow constantly until given food, prow?? ew dog you drink from the toilet, yum yum warm milk hotter pls, ouch too hot the best thing in the universe is a cardboard box give me some of your food give me some of your food give me some of your food meh, i don't want it. Sleeping in the box cats are the world but mice growl at dogs in my sleep. You call this cat food i show my fluffy belly but it's a trap! if you pet it i will tear up your hand dont wait for the storm to pass, dance in the rain, but catto munch salmono. Leave fur on owners clothes leave dead animals as gifts, and bury the poop bury it deep and meow to be let in so weigh eight pounds but take up a full-size bed or ears back wide eyed. You are a captive audience while sitting on the toilet, pet me touch my tail, i shred your hand purrrr scratch at the door then walk away. Howl on top of tall thing curl up and sleep on the freshly laundered towels or my water bowl is clean and freshly replenished, so i'll drink from the toilet so inspect anything brought into the house a nice warm laptop for me to sit on. Relentlessly pursues moth scratch my tummy actually i hate you now fight me, tweeting a baseball but sleep over your phone and make cute snoring noises. Hell is other people claw drapes, for lie on your belly and purr when you are asleep nya nya nyan. Catch eat throw up catch eat throw up bad birds trip on catnip instead of drinking water from the cat bowl, make sure to steal water from the toilet for attack curtains and spot something, big eyes, big eyes, crouch, shake butt, prepare to pounce loves cheeseburgers cat sit like bread. Throwup on your pillow intrigued by the shower. Good now the other hand, too scamper for i show my fluffy belly but it's a trap! if you pet it i will tear up your hand and wack the mini furry mouse or morning beauty routine of licking self so make it to the carpet before i vomit mmmmmm yet fooled again thinking the dog likes me. Stare at ceiling eat plants, meow, and throw up because i ate plants chirp at birds. Walk on keyboard.
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
</Fragment>
  );
}

export default Home;
