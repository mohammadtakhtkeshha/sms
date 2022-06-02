import React, {useEffect} from "react";
import { makeStyles } from "@mui//styles";
import { useDropzone } from "react-dropzone";
import Button from "@mui/material/Button";
// import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import Avatar from "@mui/material/Avatar";
import {  red } from "@mui/material/colors";

const styles = makeStyles((theme) => ({
  dropzone: {
    // flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: theme.spacing(1),
    borderWidth: 2,
    borderRadius: 5,
    borderColor: "#d6d6d6",
    // borderStyle: "solid",
    backgroundColor: "#fff",
    color: "rgb(38, 37, 86)",
    outline: "none",
    transition: "border .24s ease-in-out",
  },
  thumbsContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  thumb: {
    display: "inline-flex",
    borderRadius: 5,
    border: "1px solid #eaeaea",
    marginBottom: 8,
    marginRight: 8,
    width: 200,
    height: 200,
    padding: 4,
    boxSizing: "border-box",
    flexDirection: "column",
  },
  thumbDelete: {
    fontSize: "1.4rem",
  },
  thumbInner: {
    display: "flex",
    minWidth: 0,
    overflow: "hidden",
  },
  img: {
    display: "block",
    width: "auto",
    height: "100%",
  },
  preview: {
    width: "100%",
    height: "100%",
  },
  title: {
    cursor: "pointer",
  },
  error: {
    color: "red",
    fontSize: "0.75rem",
    margin: theme.spacing(1),
    marginTop: theme.spacing(0.5),
  },
}));

const MultiUploadComponent = (props) => {
  const {
    setFieldValue,
    defaultImage,
    width,
    height,
    value: val,
    removeLabel,
    addLabel,
    label,
  } = props;
  const classes = styles();

  const [value, setValue] = React.useState(val);

  useEffect(() => {
    var val = props.value;
    setValue(val);

  }, [props]);

  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      const uploadFiles = [];

      const values = acceptedFiles.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      );

      uploadFiles.push(...values);
      setFieldValue("files", uploadFiles);

      setValue(uploadFiles);
    },
  });

  const handleDelete = (index) => {
    value.splice(index, 1);
    setFieldValue("files", value);
    // setFieldValue("files", []);
  };

  const handlePreviewIcon = (file) => {
    if (!file) return null;

    const { type } = file;

    if (type === undefined) return <p></p>;
    if (type.startsWith("image/"))
      return <img className={classes.img} src={file.preview} alt="" />;
    //   if (type.startsWith("video/")) return <Theaters className={classes.preview} />;
    // if (type.startsWith("audio/")) return <AudioTrack className={classes.preview} />;
    // switch (type) {
    //     case "application/msword":
    //     case "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
    //         return <Description className={classes.preview} />;
    //     case "application/pdf":
    //         return <PictureAsPdf className={classes.preview} />;
    //     default:
    //         return <AttachFile className={classes.preview} />;
    // }
  };

  const thumbs =
    value &&
    value.map((file, index) => (
      <div
        className={classes.thumb}
        key={file.name}
        style={{ display: "flex", flexDirection: "row-reverse" }}
      >
        <Avatar
          sx={{
            bgcolor: red[50],
            color: red[500],
            height: "100%",
            alignItems: "center",
          }}
          onClick={() => handleDelete(index)}
          variant="rounded"
        >
          <DeleteOutlineIcon />
        </Avatar>
        <div className={classes.thumbInner}>{handlePreviewIcon(file)}</div>
      </div>
    ));

  return (
    <div>
      {/* <aside style={{ padding: "0px 20px" }}>
        <div>
          {value ? (
            <div>{handlePreviewIcon(value)}</div>
          ) : (
            <img src={defaultImage} width={width} height={height} alt="" />
          )}
        </div>
      </aside>
      <div {...getRootProps({ className: "dropzone" })}>
        <input {...getInputProps()} />
        {value ? (
          <Button variant="outlined" sx={{ m: 2 }}>
            {removeLabel}
          </Button>
        ) : (
          <Button variant="outlined" sx={{ m: 2 }}>
            {addLabel}
          </Button>
        )}
      </div> */}
      <section>
        <div {...getRootProps({ className: classes.dropzone })}>
          <input {...getInputProps()} />
          <p className={classes.title}>{label}</p>
          <Button variant="contained" color="success" sx={{ m: 2 }}>
            افزودن فایل
          </Button>
        </div>
        {/* <p className={classes.error}>{error}</p> */}
        <aside className={classes.thumbsContainer}>{thumbs}</aside>
      </section>
    </div>
  );
};

export default MultiUploadComponent;
