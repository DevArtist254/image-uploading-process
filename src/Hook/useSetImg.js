import {useEffect, useState} from "react"
import {
  storage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "./../firebase/firebase"

const useSetImg = (file) => {
  const [progress, setProgress] = useState(0)
  const [errors, setError] = useState("")
  const [url, setURL] = useState("")

  useEffect(() => {
    //get the ref
    const storageRef = ref(storage, file.name)
    //storage
    const upLoadTask = uploadBytesResumable(storageRef, file)
    //on upload

    upLoadTask.on(
      "state_changed",
      (snapshot) => {
        //snapshot for the file being uploaded
        let percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100

        setProgress(percentage)
      },
      (err) => {
        setError(err)
      },
      async () => {
        getDownloadURL(upLoadTask.snapshot.ref).then((downloadedURL) => {
          setURL(downloadedURL)
        })
      }
    )
  }, [file])

  return {progress, errors, url}
}

export default useSetImg
