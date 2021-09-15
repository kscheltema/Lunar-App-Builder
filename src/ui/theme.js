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
    title: {
padding: '2em',
    },
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
      width: 500,
      height: 500,
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