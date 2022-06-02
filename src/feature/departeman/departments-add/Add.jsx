import React from "react";
import { useTranslation } from "react-i18next";
import { useFormik } from "formik";
import * as yup from "yup";
import { makeStyles } from '@material-ui/core';
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
// 
import { post } from "../../../core/services/department.service";
import AdminOperationPanel from "../../../shared/DialogBox/dialog";
// showError

const useStyles = makeStyles((theme) => ({
  departman: {
    background: "#F7F7F7",
    borderRadius: "5px",
    border: "1px solid #E9EBFF",
  },
}));

const trans = "departmentsAdd";


const DepartmentEdit = (props) => {
  const { open, onClose, onSave } = props;
  const classes = useStyles();
  const { t: translate } = useTranslation("departeman");


  const validationSchema = yup.object({
    departmentName: yup.string(),
  });

  const formik = useFormik({
    initialValues: {
      departmentName: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      // onSave(values);
      const data = {
        name: values.departmentName,
      };
      post(`departments`, data)
        .then((data) => {
          onSave(data);
          onClose();
          alert(" Add to Taible");
        })
        .catch(function (error) {
          const { text } = error;
          alert(text);
        });
    },
  });

  return (
    <AdminOperationPanel
      open={open}
      onClose={onClose}
      size="xs"
      title="Add "
      saveText="Save"
      closeText="Close"
      onSave={formik.handleSubmit}
    >
      <Box>
        <Box
          component="form"
          noValidate
          onSubmit={formik.handleSubmit}
          sx={{ mt: 1 }}
        >
          <Grid item sm={6}>
            <TextField
              autoFocus
              margin="normal"
              placeholder="setting"
              fullWidth
              variant="outlined"
              id="departmentName"
              name="departmentName"
              label="name"
              className={classes.departman}
              value={formik.values.departmentName}
              onChange={formik.handleChange}
              error={
                formik.touched.departmentName &&
                Boolean(formik.errors.departmentName)
              }
              helperText={
                formik.touched.departmentName && formik.errors.departmentName
              }
            />
          </Grid>
        </Box>
      </Box>
    </AdminOperationPanel>
  );
};

export default DepartmentEdit;
