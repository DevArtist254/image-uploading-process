import {useState} from "react"
import Progress from "./Progress"

function App() {
  const [file, setFile] = useState(null)

  const wantedFiles = ["image/jpeg", "image/png"]
  const upFileLoad = (e) => {
    const selected = e.target.files[0]

    if (selected && wantedFiles.includes(selected.type)) {
      //selected file in the state

      setFile(selected)
    } else {
      //Error
      console.log("Error please upload the correct file type")
    }
  }

  return (
    <div className="App">
      <h1>Hello world</h1>
      <input type="file" onChange={upFileLoad} />
      {file && <Progress file={file} />}
    </div>
  )
}

export default App
