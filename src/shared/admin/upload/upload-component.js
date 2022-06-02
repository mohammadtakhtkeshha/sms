import React from "react";
import { makeStyles } from "@mui//styles";
import { useDropzone } from "react-dropzone";
import Button from '@mui/material/Button';


const styles = makeStyles(theme => ({
  img: {
    display: "block",
    width: "100%",
    height: "100%"
}
}));


const UploadComponent = (props) => {
  const { setFieldValue, defaultImage, width, height, value: val, removeLabel, addLabel } = props;
  const classes = styles();

  const [value, setValue] = React.useState(val);

  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      setFieldValue("files", acceptedFiles[0]);

      if (acceptedFiles && acceptedFiles.length > 0) {
        const val = Object.assign(acceptedFiles[0], {
          preview: URL.createObjectURL(acceptedFiles[0]),
        });

        setValue(val);
      }
    },
  });


  const handlePreviewIcon = file => {
    if (!file) return null;

    const { type } = file;

    if (type === undefined) return <p></p>;
    if (type.startsWith("image/")) return <img className={classes.img} src={file.preview} alt="" />;
  }

  return (
    <div>
     
      <aside style={{padding:"0px 20px"}}>
        <div >
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
       
          <Button variant="outlined" sx={{m:2}}>{ removeLabel}</Button>
        ) : (
          <Button variant="outlined"  sx={{m:2}}>{ addLabel}</Button>
         
        )}
      </div>
    </div>
  );
};

export default UploadComponent;
