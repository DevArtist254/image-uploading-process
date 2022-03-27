import React from "react"
import useSetImg from "./Hook/useSetImg"

function Progress({file}) {
  //Hook set effe
  const {progress, errors, url} = useSetImg(file)

  return (
    <div>
      <div style={{width: `${progress}%`, backgroundColor: "#000"}}>
        Progress
      </div>
      {progress === 100 && <img alt="uploaded file" src={url} />}
    </div>
  )
}

export default Progress
