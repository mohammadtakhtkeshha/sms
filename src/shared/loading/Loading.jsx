import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import makeStyles from "@mui/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
  loading: {
    position: "absolute",
    width: " 100%",
    height: "100%",
    top: "50%",
    left: "50%",
    transform: "translate(-50% , -50%)",
    zIndex: 999999,
    backgroundColor: "rgba(0,0,0,0.4) !important",
  },
  loadingNone: {
    display: "none ",
  },
  CircularProgress: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50% , -50%)",
    zIndex: 0,
  },
  text:{
    position: "absolute",
    top: "60%",
    left: "51%",
    transform: "translate(-50% , -50%)",
    zIndex: 0,
    color :"fff",
    fontSize:"18px"

  },
}));

export default function Loading(props) {
  const classes = useStyles();
  return (
    <>
      <div className={props.loding ? classes.loading : classes.loadingNone}>
        <CircularProgress
          color="inherit"
          className={classes.CircularProgress}
        />
      
        <div className={classes.text}>در حال بارگذاری...</div>
        
      </div>
    </>
  );
}
