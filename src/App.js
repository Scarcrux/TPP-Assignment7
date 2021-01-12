import logo from './logo.svg';
import './App.css';
import GetData from './components/GetData'
import GetUrl from './components/GetUrl'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <GetUrl/>
        <GetData/>
      </header>
    </div>
  );
}

export default App;
