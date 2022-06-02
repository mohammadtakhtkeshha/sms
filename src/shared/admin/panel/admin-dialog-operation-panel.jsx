import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { makeStyles } from '@mui/styles';
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import CloseIcon from '@mui/icons-material/Close';
import { Formik } from "formik";

const useStyles  = makeStyles((theme) => ({
  dialogTitle: {
    padding: 0,
  },
  appBar: {
    position: "relative",
    background: "rgb(30 5 129) !important",
    color: "#fff !important"
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
  form: {
    display: "flex",
    flexDirection: "row",
  },
  container: {
    "& > div": {
      width: "100%",
    },
  },
  errors: {
    position: "sticky",
    top: 0,
    background: "white",
    marginBottom: theme.spacing(2.5),
    zIndex: 2000,
  },
}));

function AdminOperationPanel(props) {
    const classes = useStyles ();
    // const { children, open, size = "sm", fullScreen = false, showErrors = false, errorsCount = 0 } = props;
    const { children, open = false, size = "sm", fullScreen = false } = props;
    const { title, closeText, saveText, onSave, onClose } = props;
    // const [errors, setErrors] = React.useState([]);
    const [errors, ] = React.useState([]);

  const attrs = {
    fullWidth: true,
    fullScreen,
    maxWidth: size,
    open,
    onClose,
    // TransitionComponent: Transition,
  };

  return (
    <Dialog {...attrs} aria-labelledby="dialog-title">
      <DialogTitle id="dialog-title" className={classes.dialogTitle}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              {title}
            </Typography>
            <IconButton edge="end" color="inherit" onClick={onClose}>
              <CloseIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </DialogTitle>
      <DialogContent dividers>
      <Formik>
        <form className={classes.form} noValidate>
          <Grid container spacing={1} className={classes.container}>
            {children}
          </Grid>
        </form>
        </Formik>
      </DialogContent>
      <DialogActions>
        <Button color="secondary" onClick={onClose}>
          {closeText}
        </Button>
        {onSave && (
          <Button
            type="submit"
            variant="contained"
            color="primary"
            onClick={onSave}
            disabled={errors.length !== 0}
          >
            {saveText}
          </Button>
        )}
      </DialogActions>
    </Dialog>
  );
}

export default AdminOperationPanel;
