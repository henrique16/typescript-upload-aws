import uploadFiles from "./uploadFiles"

uploadFiles("path")
    .then(() => console.log("ok"))
    .catch(error => console.log(error))