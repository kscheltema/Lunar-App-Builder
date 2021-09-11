import {
    createTheme,
    createStyles,
    makeStyles,
  } from "@material-ui/core/styles";
  
  export const theme = createTheme({
    palette: {
      primary: {
        main: "#019cde",
      },
      secondary: {
        main: "#fff",
      },
    },
    typography: {
      fontFamily: "Roboto",
    },
  });
  
  const styles = makeStyles((theme) =>
    createStyles({
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
    root: {
        flexGrow: 1,
      },
    menuButton: {
        marginRight: theme.spacing(2),
      },
    title: {
        flexGrow: 1,
      },
    })
  );
  
  export default styles;