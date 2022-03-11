import './App.css';
import { BookCollection } from './ui-components';

function App() {
  return (
    <div className="App">
      <header>
        <h2>My Book Recommendation</h2>
      </header>
      <div style={{ "borderRadius": "10px", "border": "solid 2px slategray", "padding": "10px", "margin": "10px" }}>
        <BookCollection />
      </div>
    </div>
  );
}

export default App;
