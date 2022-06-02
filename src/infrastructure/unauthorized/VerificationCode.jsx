import React, { useState, useRef } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { useTranslation } from "react-i18next";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { TextField } from "@mui/material";
//
import { post } from "../../core/services/verificationCode.service";
import LocalStorageService from "../../libraries/storage/localStorageService";
//
import { useAuthDispatch } from "../../context";
import { actionType } from "../../context/reduser";
//
// import ResendVerificationCodeR from "./ResendVerificationCode";

const trans = "unauthorized.login";

function VerificationCode(props) {
    const { idVerifiCode, phoneNumber, onCode } = props;
    debugger

  const { t: translate } = useTranslation("infrastructure");
  const dispatch = useAuthDispatch();
  const [key, setKey] = useState(0);
  const [isPlaying] = useState(true);

 

  const validationSchema = yup.object({
    code1: yup.number().required(),
    code2: yup.number().required(translate(`${trans}.verificationcodes`)),
    code3: yup.number().required(translate(`${trans}.verificationcodes`)),
    code4: yup.number().required(translate(`${trans}.verificationcodes`)),
  });

  const [handleLogindisabled, setHandleLogindisabled] = useState(false);
  const [errorText, setErrorText] = useState(false);
  const textFieldcode1Ref = useRef(null);
  const textFieldcode2Ref = useRef(null);
  const textFieldcode3Ref = useRef(null);
  const textFieldcode4Ref = useRef(null);
  const buttonloginRef = useRef();
  const formik = useFormik({
    initialValues: {
      code1: "",
      code2: "",
      code3: "",
      code4: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      const code = `${values.code1}${values.code2}${values.code3}${values.code4}`;
      dispatch({
        type: actionType.LOGIN_REQUEST,
      });

      post(`${idVerifiCode}`, { confirmCode: code })
        .then((data) => {
          if (data) {
            if (data.accessToken) {
              LocalStorageService.store("token", data.accessToken);
              LocalStorageService.store("refreshToken", data.refreshToken);
              LocalStorageService.store("user", JSON.stringify(data.user));
              dispatch({
                type: actionType.LOGIN_REQUEST,
              });
              const token = LocalStorageService.retrieve("token");
              const user = LocalStorageService.retrieve("user");
              const permissionParse = JSON.parse(user);
              const permissionArr = permissionParse?.permissions;

              if (token && user) {
                dispatch({
                  type: actionType.LOGIN_SUCCESS,
                  payload: {
                    user: user,
                    token: token,
                    permission: permissionArr,
                    Logout: true,
                  },
                });
              } else {
                alert("No data");
              }
            }
          }
        })
        .catch((error) => {
          setErrorText(true);
          formik.setFieldValue(
            (values.code1 = ""),
            (values.code2 = ""),
            (values.code3 = ""),
            (values.code4 = "")
          );
          
          setHandleLogindisabled(false);
          alert (error?.text);
        });
    },
  });

 
  const CHARACTER_LIMIT = 1;

  const avengers = ["code1", "code2", "code3", "code4"];
  avengers.forEach((item, index) => {
    const code = document.getElementById(item);
    if (code) {
      code.addEventListener("focus", function (e) {
        e.target.select();
      });
    }
  });
  // Attr
  const numberCode1Attr = {
    type: "number",
    variant: "standard",
    autoFocus: true,
    name: "code1",
    id: "code1",
    inputRef: textFieldcode1Ref,
    sx: {
      mt: 2,
      ml: 2,
    },
    error: formik.touched.code1 && Boolean(formik.errors.code1) ? true : false,
    value: formik.values.code1,
    onChange: (e) => {
      formik.setFieldValue("code1", e.target.value);
      if (e.target.value.length > 0) {
        textFieldcode2Ref.current.focus();
      }
    },

    onInput: (e) => {
      e.target.value = Math.max(0, parseInt(e.target.value))
        .toString()
        .slice(0, 1);
    },
    inputProps: {
      maxLength: CHARACTER_LIMIT,
      max: 9,
      style: { textAlign: "center" },

      onKeyPress: (event) => {
        const { key } = event;
        if (key === "Enter") {
          textFieldcode2Ref.current.click();
        }
      },
    },
  };

  const numberCode2Attr = {
    variant: "standard",
    type: "number",
    name: "code2",
    id: "code2",
    value: formik.values.code2,
    inputRef: textFieldcode2Ref,
    sx: {
      m: 2,
    },
    error: formik.touched.code2 && Boolean(formik.errors.code2) ? true : false,
    onInput: (e) => {
      e.target.value = Math.max(0, parseInt(e.target.value))
        .toString()
        .slice(0, 1);
    },
    onChange: (e) => {
      formik.setFieldValue("code2", e.target.value);
      if (e.target.value.length > 0) {
        textFieldcode3Ref.current.focus();
      }
    },
    inputProps: {
      maxLength: CHARACTER_LIMIT,
      max: 9,
      style: { textAlign: "center" },
      onKeyPress: (event) => {
        const { key } = event;
        if (key === "Enter") {
          textFieldcode3Ref.current.click();
        }
      },
    },
  };
  const numberCode3Attr = {
    variant: "standard",
    type: "number",
    name: "code3",
    id: "code3",
    value: formik.values.code3,
    inputRef: textFieldcode3Ref,
    error: formik.touched.code3 && Boolean(formik.errors.code3) ? true : false,
    sx: {
      m: 2,
    },
    onChange: (e) => {
      formik.setFieldValue("code3", e.target.value);
      if (e.target.value.length > 0) {
        textFieldcode4Ref.current.focus();
      }
      return null;
    },
    onInput: (e) => {
      e.target.value = Math.max(0, parseInt(e.target.value))
        .toString()
        .slice(0, 1);
    },
    inputProps: {
      maxLength: 1,
      max: 9,
      style: { textAlign: "center" },
      onKeyPress: (event) => {
        const { key } = event;
        if (key === "Enter") {
          textFieldcode4Ref.current.click();
        }
      },
    },
  };
  const numberCode4Attr = {
    variant: "standard",
    type: "number",
    value: formik.values.code4,
    inputRef: textFieldcode4Ref,
    name: "code4",
    id: "code4",
    sx: {
      m: 2,
    },
    error: formik.touched.code4 && Boolean(formik.errors.code4) ? true : false,
    onChange: (e) => {
      formik.setFieldValue("code4", e.target.value);
      if (e.target.value.length > 0) {
        buttonloginRef && buttonloginRef.current.focus();
      }
    },
    onInput: (e) => {
      e.target.value = Math.max(0, parseInt(e.target.value))
        .toString()
        .slice(0, 1);
    },
    inputProps: {
      maxLength: CHARACTER_LIMIT,
      max: 9,
      style: { textAlign: "center" },
      onKeyPress: (event) => {
        const { key } = event;
        if (key === "Enter") {
          // onchange = {formik.handleSubmit}
        }
      },
    },
  };


  return (
    <div>
      <form
        component="form"
        // autoComplete="false"
        noValidate
        onSubmit={formik.handleSubmit}
        sx={{
          mt: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <div>
          <span
            style={{
              paddingRight: 20,
              fontSize: "12px",
            }}
          >
            {" "}
            {translate(`${trans}.submissionCode`)}
          </span>
          <Box
            dir="ltr"
            style={{
              display: "flex",
              justifyContent: "center",
              alingitem: "center",
              width: "350px",
              "& > :not(style)": { m: 3 },
            }}
          >
            <TextField {...numberCode1Attr} />
            <TextField {...numberCode2Attr} />
            <TextField {...numberCode3Attr} />
            <TextField {...numberCode4Attr} />
          </Box>
        </div>

        {((formik.touched.code1 && formik.errors.code1) ||
          (formik.touched.code2 && formik.errors.code2) ||
          (formik.touched.code3 && formik.errors.code3) ||
          (formik.touched.code4 && formik.errors.code4)) && (
          <div
            style={{
              color: "red",
              fontSize: "12px",
              display: "flex",
              justifyContent: "center",
              marginBottom: "12px",
            }}
          >
            {translate(`${trans}.verificationcodes`)}
          </div>
        )}

        <>
          <Button onClick={() => onCode()}>
            {" "}
            {translate(`${trans}.editNumber`)}
          </Button>

          <Stack direction="row">
            <Button
              ref={buttonloginRef}
              type="submit"
              disableElevation
              variant="contained"
              sx={{
                mt: 1,
                mb: 2,
                mx: "auto",
                width: "100%",
                height: 40,
                borderRadius: "5px",
              }}
            >
              {translate(`${trans}.login`)}
            </Button>
            
          </Stack>
        </>
      </form>
    </div>
  );
}

export default VerificationCode;
