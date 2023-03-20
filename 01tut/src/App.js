import logo from './logo.svg';
import './App.css';

function App() {
  const name = "Xuan Dat Tran"
  const handleNameChange = () => {
    const names = ['Dat', 'Anh Minh', 'Hung Cho']
    const index = Math.floor(Math.random()*3)
    return names[index]
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to change.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>Hello {handleNameChange()}</p>
      </header>
      <p>{name}</p>
    </div>
  );
}

export default App;
