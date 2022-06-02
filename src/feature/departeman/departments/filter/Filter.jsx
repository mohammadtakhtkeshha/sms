import React from "react";
import { makeStyles } from '@material-ui/core';
import { useFormik } from "formik";
import * as yup from "yup";
import { useTranslation } from "react-i18next";
import { Grid } from "@mui/material";
import AdminFilterPanel from "../../../../shared/admin/panel/admin-filter-panel";
import AdminFilterTextField from "../../../../shared/admin/filter/admin-filter-text-field";



const trans = "users.filter.userListFilter";

const defaultFilter = {
  fullName: "",
};

export default function RoleFilter(props) {
  const { onStatusChange, onReset } = props;

  const { t: translate } = useTranslation("user");

  const validationSchema = yup.object();

  const formik = useFormik({
    initialValues: defaultFilter,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      onStatusChange(values.fullName);
    },
  });

  const handleReset = () => {
    if (true) {
      formik.resetForm();
    }
    onReset();
  };
  return (
    <div>
      <AdminFilterPanel
        clearText="clear"
        filterText="Filter"
        onSubmit={formik.handleSubmit}
        onFilter={formik.handleSubmit}
        onReset={handleReset}
      >
        <Grid container mr justify="center" spacing={0}>
          <Grid style={{ display: "flex", justifyContent: "end" }} item xs={12}>
           <AdminFilterTextField 
              id="fullName"
              name="fullName"
              type="text"
              placeholder={translate(`${trans}.fullName`)}
              value={formik.values.fullName}
              onChange={formik.handleChange}
              error={formik.touched.fullName && Boolean(formik.errors.fullName)}
              helperText={formik.touched.fullName && formik.errors.fullName}
              />
            
          </Grid>
        </Grid>
      </AdminFilterPanel>
    </div>
  );
}
