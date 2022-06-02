import React from "react";
import fileService from "../../core/services";

async function SaveFile(file) {
  if (file) {
    let formData = new FormData();
    formData.append("attachment", file);
    // Attach file
    formData.append("image", $("input[type=file]")[0].files[0]);

    const item = await fileService
      .save(formData)
      .then((item) => item.uid)
      .catch(() => null);
    return item;
  }
  return null;
}

export default SaveFile;
