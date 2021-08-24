import logo from './logo.svg';
import './App.css';
import ClassComponentDemo from './components/ClassComponentDemo';
import ClassComponentProps from './components/ClassComponentProps';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <ClassComponentDemo />
      <ClassComponentProps />
    </div>
  );
}

export default App;
