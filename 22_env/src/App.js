function App() {
  console.log(process.env.REACT_APP_VAR);
  return (
    <div className="App">
      <h1>{process.env.REACT_APP_VAR}</h1>
      <h1>{process.env.REACT_APP_VAR2}</h1>
    </div>
  );
}

export default App;
