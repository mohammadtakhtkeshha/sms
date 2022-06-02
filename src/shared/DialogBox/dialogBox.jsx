import React from "react";
import PropTypes from "prop-types";
import Divider from "@mui/material/Divider";
import {
  Dialog,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from "@mui/material";
const DialogBox = (props) => {
  return (
    <Dialog
      // maxWidth={"497px !importantant"}
      PaperProps={{
        style: { borderRadius: 5, width: 497 },
      }}
      open={props.open}
      onClose={props.onCancel}
      style={{ backgroundColor: "red !important" }}
    >
      {/* <DialogTitle id="alert-dialog-title">{props.title}</DialogTitle> */}

      <DialogContent
        style={{
          display: "flex",
          borderRadius: "5px !important",
          fontSize: "14px",
          alignItems: "center",
          fontWeight: "700",
          color: "#262556",
          justifyContent: "center",
        }}
      >
        <DialogContentText id="alert-dialog-slide-description">
          {props.title}
        </DialogContentText>
      </DialogContent>
      <Divider style={{ margin: " 0px 33px 10px", opacity: 0.4 }} />
      <DialogActions style={{ margin: "0 24px 12px 24px" }}>
        <Button
          style={{
            width: "60%",
            height: "50px",
            background: "#28A977",
            borderRadius: "5px",
          }}
          variant="contained"
          color="primary"
          onClick={props.onConfirm}
          autoFocus
        >
          {props.confrim ? props.confrim : "بله"}
        </Button>
        <Button
          style={{
            width: "40%",
            height: "50px",
            background: "#F6E9E9",
            borderRadius: "5px",
            color: "#A92828",
          }}
          variant="contained"
          color="secondary"
          onClick={props.onCancel}
        >
          {props.cancel ? props.cancel : "خیر"}
        </Button>
      </DialogActions>
    </Dialog>
  );
};
DialogBox.prototype = {
  open: PropTypes.bool,
  title: PropTypes.string,
  content: PropTypes.string,
  confrim: PropTypes.string,
  cancel: PropTypes.string,
  onConfirm: PropTypes.func,
  onCancel: PropTypes.func,
};
export default DialogBox;
