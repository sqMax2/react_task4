import './App.css';
import { useViewportSize } from './useViewportSize';

function Demo() {
  const { height, width } = useViewportSize();

  return (
    <>
      Width: {width}, height: {height}
    </>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <Demo/>
        </div>
      </header>
    </div>
  );
}

export default App;
