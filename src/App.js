import './App.css';
import Characters from './components/Characters.js';
import {SectionHeader, NoticeCell, LoadingCell, PersonCell, DataCell, Header, Card} from './components/index.js';
import { H2Default, H2HighEmphasis, H2White, H2LowEmphasis, P1Default, P1LowEmphasis} from './TextStyles/index.js';

function App() {
  return (
    <div className="App">
      <Header>
        <H2White>Ravn Star Wars Registry</H2White>
      </Header>
      <Characters></Characters>
     <p>My app</p>
    </div>
  );
}

export default App;
