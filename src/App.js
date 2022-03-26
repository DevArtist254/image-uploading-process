function App() {
  const upFileLoad = (e) => {
    console.log(e.target.value)
  }

  return (
    <div className="App">
      <h1>Hello world</h1>
      <input type="file" onChange={upFileLoad} />
    </div>
  )
}

export default App
