import {
    makeStyles,
  } from "@material-ui/core/styles";
  
  const styles = makeStyles((theme) =>({
    title: {
padding: '2em',
    },
    rootCard: {
      display: 'flex'
    },
    rootMedium: {
        flexGrow: 1,
        paddingTop: "1rem",
        paddingLeft: "1rem",
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
        paddingLeft: "2rem",
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
      width: 590,
      height: 575, 
    },
    })
  );
  
  export default styles;