import uploadFiles from "./main/uploadFiles"

const path: string = "C:/work/medias"
uploadFiles(path)
    .then(() => console.log("upload ok"))
    .catch(error => console.log(error))