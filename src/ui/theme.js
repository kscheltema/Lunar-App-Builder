import {
    makeStyles,
  } from "@material-ui/core/styles";
  
  // export const theme = createTheme({
  //   palette: {
  //     primary: {
  //       main: "#019cde",
  //     },
  //     secondary: {
  //       main: "#fff",
  //     },
  //   },
  //   typography: {
  //     fontFamily: "Roboto",
  //   },
  // });
  
  const styles = makeStyles((theme) =>({
    //   bgContainer: {
    //     backgroundPosition: 'center',
    //     backgroundSize: 'cover',
    //     display: 'block',
    //     position: 'fixed',
    //     objectFit: 'cover',
    //     left: '0px',
    //     width: '100%',
    //     zIndex: '-1',
    //     [theme.breakpoints.up('sm')]: {
    //       backgroundImage: `url('${BgLandscape}')`,
    //       height: '100%',
    //     },
    //     [theme.breakpoints.down('sm')]: {
    //       height: '100%',
    //       backgroundImage: `url('${BgPortrait}')`,
    //     },
    //   },
    //   buttonStyle: {
    //     borderRadius: 10,
    //     color: theme.palette.secondary["main"],
    //     backgroundColor: theme.palette.primary["main"],
    //     padding: "0 0rem",
    //     width: "50em",
    //     margin: "0.5rem 0rem 0.5rem 0rem",
    //     textTransform: "none",
    //   },
    //   homeLogo: {
    //     paddingTop: "1em",
    //     width: "20em",
    //   },
    //   homeText: {
    //     color: theme.palette.secondary["main"],
    //   },
    //   homeMessageMobile: {
    //     fontSize: 20,
    //     fontWeight: "bold",
    //     paddingLeft: "5em",
    //     paddingRight: "5em",
    //     paddingBottom: "5em",
    //     paddingTop: "5em",
    //   },
    //   homeMessageSpacing: {
    //     alignItems: "center",
    //   },
    //   copyright: {
    //     textAlign: "center",
    //     fontSize: 14,
    //     fontWeight: "bold",
    //     paddingBottom: "3rem",
    //   },
    rootCard: {
      display: 'flex',
    },
    rootMedium: {
        flexGrow: 1,
      },
      rootSmall: {
        flexGrow: 1,
      },
    menuButtonMD: {
        marginRight: theme.spacing(2),
        backgroundColor: "inherit",
      },
    menuButtonSM: {
        marginRight: theme.spacing(0.25),
        backgroundColor: "inherit",
      },
    title: {
        flexGrow: 1,
      },
    details: {
        display: 'flex',
        flexDirection: 'column',
      },
    buttonStyle: {
        backgroundColor: "#019cde",
        color: "#fff",
        margin: theme.spacing(0.75),
        '&:hover': {
          boxShadow: 'none',
          backgroundColor: "#019cde",
          textDecoration: "underline"
        }
    },
    buttonStyleSM: {
      backgroundColor: "#019cde",
      color: "#fff",
      marginRight: theme.spacing(1),
      '&:hover': {
        boxShadow: 'none',
        backgroundColor: "#019cde",
        textDecoration: "underline"
      }
  },
    appBar: {
      backgroundColor: "#fff",
      color: "#019cde",
    },
    appBarSM: {
      backgroundColor: "#fff",
      color: "#019cde",
      minHeight: '15vh',
    },
    cover: {
      width: 151,
    },
    hero: {
      // position: 'relative',
      // display: 'flex',
      // alignItems: 'baseline',
      // marginTop: '-100vh',
      // minHeight: theme.standards.toolbar.heights.mobilePortrait,
    }
    })
  );
  
  export default styles;