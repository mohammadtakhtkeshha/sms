import React, { useState, useEffect } from "react";
import DepartemansList from "./list/departments-list";
import DepartmentEdit from "../departments-edit/Edit";
import DepartmentAdd from "../departments-add/Add";
import { save, list } from "../../../core/services/department.service";
import DepartemansListHeader from "./header/heder";

// loding
import DialogBox from "../../../shared/DialogBox//dialogBox";
import { useTranslation } from "react-i18next";
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  dialogBoxStyles: {
    borderRadius: "5px !important",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));
const trans = "departemans";

export default function Departemans() {
  const { t: translate } = useTranslation("departeman");
  const classes = useStyles();
  const [dataTabele, setDataTabele] = useState([]);
  const [departemans, setDepartemans] = useState(null);
  const [openEditDialog, setOpenEditDialog] = useState(false);
  const [openEditDialogSwitch, setOpenEditDialogSwitch] = useState(false);
  const [openCreateDialog, setOpenCreateDialog] = useState(null);
  const [dataRefresh, setDataRefresh] = useState(false);
  const [name, setName] = useState("");

  useEffect(() => {
    (async function load() {
      await list("departments")
        .then(({ data }) => {
          
          if (data.length > 0) {
            setDataTabele(data);
          }
          // handle success
        })
       
    })();
  }, [ dataRefresh, translate]);

  const toggleCreateDialog = (item) => {
    setOpenCreateDialog(!openCreateDialog);
  };
  const toggleUpdateDialog = (item) => {
    setDepartemans(item);
    setOpenEditDialog(!openEditDialog);
  };
  const toggleUpdateSwitch = (item) => {
    setDepartemans(item);
    setOpenEditDialogSwitch(!openEditDialogSwitch);
  };

  const handleDataSwitch = (item) => {
    const data = {
      name: departemans.name,
      status: departemans && departemans.status === "1" ? "0" : "1",
    };
    save(`departments/${departemans.id}`, data)
      .then((data) => {
        setDataRefresh(!dataRefresh);
        setOpenEditDialogSwitch(!openEditDialogSwitch);
        alert(translate(`${trans}.SuccessfulOperation`));
      })
      .catch((err) => {
        alert( translate(`${trans}.FailedError`));
      });
  };
  const handleToggleDialog = () => {
    setOpenEditDialog(!openEditDialog);
  };

  const handleDataTabele = (dataTabele) => {
    setDataRefresh(!dataRefresh);
  };

  const handeleonReset = (item) => {
    setName([]);
    setDataRefresh(!dataRefresh);
  };

  const filtered = dataTabele.filter((item) => {
    if (item.name.indexOf(name) !== -1) {
      return item;
    }
    if (item.status.indexOf(name) !== -1) {
      return item;
    }
  });

  const handlerStatusChange = (item) => {
    
    setName(item);
  };

  return (
    <>

      <DepartemansListHeader
        onCreate={toggleCreateDialog}
        onStatusChange={handlerStatusChange}
        name={name}
        onReset={handeleonReset}
      />
      {openCreateDialog && (
        <DepartmentAdd
          open={openCreateDialog}
          departemans={departemans}
          onSave={handleDataTabele}
          onClose={() => toggleCreateDialog()}
        />
      )}

      <DepartemansList
        onEdit={toggleUpdateDialog}
        onEditSwitch={toggleUpdateSwitch}
        items={filtered ? filtered : dataTabele}
        // dataTabele=
      />

      {openEditDialog && (
        <DepartmentEdit
          open={openEditDialog}
          information={departemans}
          onSave={handleDataTabele}
          onClose={() => handleToggleDialog()}
        />
      )}
      {openEditDialogSwitch && (
        <DialogBox
          open={"toggleDeleteDialog"}
          className={classes.dialogBoxStyles}
          title="setting"
          onCancel={() => setOpenEditDialogSwitch(!openEditDialogSwitch)}
          onConfirm={handleDataSwitch}
        />
      )}
    </>
  );
}
