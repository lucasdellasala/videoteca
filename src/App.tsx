import { Helmet } from 'react-helmet';
import './App.css';
import { config } from './config/config';
import SearchBar from './components/searchBar/SearchBar';


function App() {
  return (
    <div className="App">
      <Helmet>
        <title>{config.app_title}</title>
      </Helmet>
      <header className="App-header">
        <h1>{config.app_title}</h1>
        <SearchBar/>
      </header>
    </div>
  );  
}

export default App;
