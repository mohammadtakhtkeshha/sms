import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import { makeStyles } from '@material-ui/core';
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { Formik } from "formik";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
const useStyles = makeStyles((theme) => ({
  dialogTitle: {
    display: "flex",
    justifyContent: "center",
    fontSize: "14px !important",
    color: " #262556",
    fontWeight: "bold",
  },
  header: {
    display: "flex",
    justifyContent: "space-between !important",
    alignItems: "center",
    padding: "0 0px 0 20px",
  },
  appBar: {
    position: "relative",
    background: "rgb(30 5 129) !important",
    color: "#fff !important",
  },
  dialogActions: {
    justifyContent: "space-around !important",
    margin: "10px 0",
  },
  divider: {
    padding: "0 10px",
    width: "90%",
    opacity: "0.4",
  },
  dialogContent: {
    display: "flex",
    justifyContent: "center !important",
    alignItems: "center",
  },
  form: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
  },
  container: {
    "& > div": {
      width: "100%",
    },
  },
  buttonSave: {
    width: "95%",
    borderRadius: "5px !important",
    margin: "0 10px 0 0",
  },
  buttonclose: {
    width: "30%",
    backgroundColor: "#F6E9E9 !important",
    borderRadius: "5px !important",
    color: "#A92828 !important",
  },
}));

function AdminOperationPanel(props) {
  const classes = useStyles();
  // const { children, open, size = "sm", fullScreen = false, showErrors = false, errorsCount = 0 } = props;
  const {
    onSubmit,
    children,
    open = false,
    size = "md",
    fullScreen = false,
  } = props;

  const { title, closeText, saveText, onSave, onClose } = props;
  // const [errors, setErrors] = React.useState([]);
  const [errors] = React.useState([]);

  const attrs = {
    fullWidth: true,
    fullScreen,
    maxWidth: size,
    minWidth: size,
    open,
    onClose,
    // TransitionComponent: Transition,
  };

  return (
    <Dialog
      className={classes.dialog}
      {...attrs}
      aria-labelledby="dialog-title"
      PaperProps={{
        style: { borderRadius: "5px" },
      }}
    >
      <div className={classes.header}>
        <DialogTitle className={classes.dialogTitle}>{title}</DialogTitle>
        <div style={{ cursor: "pointer" }} onClick={onClose} >close</div>
      </div>
      <Divider variant="middle" />
      <DialogContent style={{ minHeight: "150px" }}>
        <Formik>
          <form noValidate>{children}</form>
        </Formik>
      </DialogContent>
      <DialogActions className={classes.dialogActions}>
        {onSave && (
          <Button
            type="submit"
            variant="contained"
            color="primary"
            onClick={onSave}
            disabled={errors.length !== 0}
            className={classes.buttonSave}
          >
            {saveText}
          </Button>
        )}
      </DialogActions>
    </Dialog>
  );
}

export default AdminOperationPanel;
