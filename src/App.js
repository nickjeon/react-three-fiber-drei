import { Suspense } from 'react';
import CanvasContainer from './components/CanvasContainer';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Suspense fallback={null}>
      <CanvasContainer />
    </Suspense>
  );
}

export default App;
