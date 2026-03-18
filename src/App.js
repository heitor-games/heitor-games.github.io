import './App.css';
import Projects from './components/Projects/Projects';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Olá, meu nome é Heitor e Este é meu portifolio!
        </p>
        <Projects />
      </header>
    </div>
  );
}

export default App;
