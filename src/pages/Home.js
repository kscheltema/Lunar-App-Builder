import {Fragment} from "react";
import CustomAppBar from "../components/CustomAppBar";
import FeaturePoem from "../components/FeaturePoem";
import {Hidden} from "@material-ui/core";
import styles from "../ui/theme";

function Home() {
  // const classes = styles();

  return (
<Fragment>  
  <CustomAppBar />
  <Hidden smDown>
  <FeaturePoem />
  </Hidden>
</Fragment>
  );
}

export default Home;
