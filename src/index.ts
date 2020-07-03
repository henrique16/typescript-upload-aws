import setFiles from "./main/setFiles"

const path: string = "C:/work/medias/test"
setFiles(path)
    .then(() => console.log("upload ok"))
    .catch(error => console.log(error))