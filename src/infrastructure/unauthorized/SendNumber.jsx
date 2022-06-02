import * as React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { useTranslation } from "react-i18next";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
//
import { post } from "../../core/services/login.servic";
//

const trans = "unauthorized.login";

function SendNumber(props) {
  const { t: translate } = useTranslation("infrastructure");

  const phoneRegExp = /^09(1[0-9]|3[0-9]|2[0-9])-?[0-9]{3}-?[0-9]{4}$/;

  const validationSchema = yup.object({
    phone: yup
      .string()
      .matches(phoneRegExp, "Mobile number is incorrect")
      .required(translate(`${trans}.enterRequiredPhon`)),
  });

  const formik = useFormik({
    initialValues: {
      phone: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      post("auth", { phone: values.phone })
        .then((data) => {
          if (data && values.phone) {
            props.onVerifiCodesubmit(data, values.phone);
          }
        })
        .catch((err) => {
          formik.setFieldValue((values.phone = ""));
          alert(err && err.text);
        });
    },
  });
 
  

  const phoneAttr = {
    id: "phone",
    name: "phone",
    type: "phone",
    value: formik.values.phone,
    onChange: formik.handleChange,
    error: formik.touched.phone && Boolean(formik.errors.phone),
    helperText: formik.touched.phone && formik.errors.phone,
    placeholder: "0912 7799 888",
    style: { borderRadius: "5px" },
   
  };

 
  return (
    <>
      <Box
        component="form"
        noValidate
        onSubmit={formik.handleSubmit}
        sx={{
          mt: 3,
          mb: 4,
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          width: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",

            "& > :not(style)": { mt: 0 },
          }}
        >
          <span style={{ fontSize: "12px"}}>
            {" "}
            phone number
          </span>
          <div dir="ltr" style={{ margin: "5px 0 10px 0" }}>
            <TextField
              hiddenLabel
              {...phoneAttr}
              fullWidth
              inputProps={{
                form: {
                  autocomplete: "off",
                },
              }}
            />
          </div>
        </Box>

        <Stack direction="row">
          <Button
            type="submit"
            disableElevation
            variant="contained"
            sx={{ mt: 3, mb: 2, mx: "auto", width: "100%" }}
          >
            {translate(`${trans}.login`)}
          </Button>
        </Stack>
      </Box>
    </>
  );
}

export default SendNumber;
