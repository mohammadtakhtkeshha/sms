import React from "react";
import { styled } from "@mui/material/styles";
import { useTranslation } from "react-i18next";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
//
import AddButton from "../../../../shared/admin/filter/admin-filter-addButton";
import DepartemanFilter from "../filter/Filter";
import AdminFilterTitle from "../../../../shared/admin/filter/admin-filter-title";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: "center",
  color: "theme.palette.text.secondary",
  background: "#F0F2FA",
  boxShadow: "none ",
}));

const trans = "departemans.header.departmentListHeader";

export default function UserListHeader(props) {
  const { t: translate } = useTranslation("departeman");
  const { onStatusChange, onReset, onCreate } = props;

  return (
    <Box sx={{ flexGrow: 0 }}>
      <Grid container spacing={1}>
        <Grid
        item
          sx={{
            display: "grid",
            justifyContent: "start",
            alignItems: "center",
          }}
          xs={12}
          sm={12}
          md={2}
          lg={2}
        >
          <AdminFilterTitle title= "setting"/>
        
        </Grid>
        <Grid
          sx={{
            display: "grid",
            justifyContent: "end",
          }}
          item
          xs={12}
          sm={12}
          md={12}
          lg={8}
        >
          <Item>
            <DepartemanFilter
              onStatusChange={onStatusChange}
              onReset={onReset}
            />
          </Item>
        </Grid>
        {(
          <Grid
            sx={{ display: "grid", justifyContent: "end" }}
            item
            xs={12}
            sm={12}
            md={12}
            lg={2}
          >
            <Item>
              <AddButton
                title="Create"
                onCreate={onCreate}
                width="150px"
              />
            </Item>
          </Grid>
        )}
      </Grid>
    </Box>
  );
}
