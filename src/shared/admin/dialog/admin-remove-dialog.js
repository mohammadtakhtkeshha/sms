import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";

function AdminRemoveDialog(props) {
  const {
    data,
    open,
    titleText,
    contentText,
    agreeText,
    disAgreeText,
    onClose,
    onDelete,
  } = props;

  return (
    <>
      <Dialog
        open={open}
        onClose={onClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{titleText}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            {contentText}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>{disAgreeText}</Button>
          <Button onClick={() => onDelete(data)}>{agreeText}</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default AdminRemoveDialog;
