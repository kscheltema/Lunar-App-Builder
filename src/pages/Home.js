import {Fragment} from "react";
import CustomAppBar from "../components/CustomAppBar";
import FeaturePoem from "../components/FeaturePoem";
// import styles from "../ui/theme";

function Home() {
  // const classes = styles();

  return (
<Fragment>  
  <CustomAppBar />
  <FeaturePoem />
</Fragment>
  );
}

export default Home;
