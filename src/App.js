import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
import React, {useState} from 'react';

function App() {
  const [mode, setMode] = useState('light');

  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#2c2d32';
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <>
      <Navbar title="Second title" aboutText='About' mode={mode} toggleMode={toggleMode} />
      <div className="container p-4">
        <TextForm heading="This is a testing form." mode={mode}/>
      </div>
      {/* <About/> */}
    </>
  );
}

export default App;
