import * as React from "react";
import { useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { useTranslation } from "react-i18next";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
//
import Image from "../../assets/img/car.svg"; // Import 
//component
import SendNumber from "./SendNumber";
import VerificationCode from "./VerificationCode";
import { Hidden } from "@mui/material";


const trans = "unauthorized.login";

function Login(props) {
  const { t: translate } = useTranslation("infrastructure");
  const [code, setCode] = useState(false);
  const [idVerifiCode, setIdVerifiCode] = useState(null);
  const [phoneNumber, setphoneNumber] = useState(null);

  const onVerifiCodesubmit = (id, phone) => {
    debugger
    if ({ id } && { phone }) {
      setCode(true);
      setIdVerifiCode(id?.id);
      setphoneNumber(phone);
    } else {
      setCode(false);
    }
  };
const handeleonCode=(item)=>{
  setCode(false)
}
  return (
    <>
     
        <Grid
          container
          component="main"
          sx={{
            height: "100vh",
            background: "#ffffff",
          }}
        >
          <CssBaseline />
          <Grid
            item
            xs={+12}
            sm={+12}
            md={+5}
            elevation={2}
            sx={{
              height: "100vh",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              background: "#F8F8FB",
            }}
          >
            <Box
              sx={{
                my: 8,
                mx: 3,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                background: "#F8F8FB",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyConte: "center",
                  alignItems: "center",
                  marginBottom: "20px",
                }}
              >
                
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "right",
                    width: "auto",
                    margin: "0px 5px",
                    padding: "0px 5px",
                  }}
                >
                 
                  <Typography
                    component="h5"
                    variant="h9"
                    style={{  marginTop: "3px" }}
                  >
                    {translate(`${trans}.RBP`)}
                  </Typography>
                </div>
              </div>
              {!code ? (
                <>
                  <SendNumber onVerifiCodesubmit={onVerifiCodesubmit} />
                </>
              ) : (
                <>
                 {idVerifiCode &&phoneNumber&& <VerificationCode
                    idVerifiCode={idVerifiCode}
                    phoneNumber={phoneNumber}
                    timeset={10}
                    onCode={handeleonCode}
                  />}
                </>
              )}
            </Box>
          </Grid>
          <Hidden only={['xs','sm']}>
          <Grid
            item
            xs={Hidden}
            sm={Hidden}
            md={+7}
            sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <img
              src={Image}
              alt={"title"}
              style={{ width: "45%", textAlign: " center" }}
            />
            <p style={{ width: "48%" , textAlign: " center" }}>
              {translate(`${trans}.descriptionLogin`)}
            </p>
            <p style={{ margin: "0", fontWeight: "bolder" }}>
              {translate(`${trans}.descriptionPanele1`)}
            </p>
          </Grid>
          </Hidden>
        </Grid>
      
    </>
  );
}

export default Login;
