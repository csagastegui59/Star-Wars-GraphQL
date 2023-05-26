import './App.css';
import Characters from './components/Characters.js';
import { Header } from './components/index.js';
import { H2White } from './TextStyles/index.js';

function App() {
  return (
    <div className="App">
      <Header>
        <H2White>Star Wars Registry</H2White>
      </Header>
      <Characters></Characters>
    </div>
  );
}

export default App;
