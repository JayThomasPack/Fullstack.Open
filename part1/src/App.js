


//the function app is a react component

const App=()=>{

  const now= new Date()

  const a=10

  const b=20

  console.log(now, a+b)

  return( <div>

    <p>Hello World, it is {now.toString()}</p>
    <p>
      {a} plus {b} is {a + b}
    </p>
  </div>)


}

/*{
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}*/

export default App;
