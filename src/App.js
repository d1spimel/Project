import './App.css';
import { Header } from './components/Header/Header';
import { Body } from './components/Body/Body';

function App() {
  return (
      <body>
          <div className='wrapper'>
          <Header/>
          <Body/>
        </div>
      </body>
  );
}

export default App;
