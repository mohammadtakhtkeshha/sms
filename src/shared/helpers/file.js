import { fileService } from "../../core/services";
import { apiUrl } from "../../config.json";

function urlToFile(url, id) {
  return new Promise((resolve) => {
    fetch(url)
      .then((res) => res.blob())
      .then((blob) => {
        // const file = new File([blob], url, { type: blob.type });
        const file = new File([blob], url, { type: blob.type });
        Object.assign(file, {
          id,
          preview: URL.createObjectURL(file),
        });
        resolve(file);
      });
  });
}

export async function convertFile(file) {
  return (
    (file && (await urlToFile(`${apiUrl}/filemanager/${file}`, file ))) || null
  );
  //  return (
  //   (file &&
  //     file.url &&
  //     file.id &&
  //     (await urlToFile(`${apiUrl}${file.url}`, `/filemanager/${file.id}`))) ||
  //   null
  // );
}

export async function saveFile(file) {
  if (file && file.id) {
    return file.id;
  } else if (file) {
    const formData = new FormData();
    formData.append("attachment", file);

    const item = await fileService.save(formData);
    return (item && item.id) || null;
  }

  return null;
}

export async function saveFiles(files) {
  if (files.length > 0) {
      let items = [];
      await Promise.all(
          files.map(async file => {
              const item = await saveFile(file);
              items.push(item);
          })
      );
      return items;
  }

  return [];
}

const exporteds = { saveFile, convertFile };
export default exporteds;
