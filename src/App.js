import logo from './logo.svg';
import './App.css';
import ClassComponentDemo from './components/ClassComponentDemo';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <ClassComponentDemo />
    </div>
  );
}

export default App;
