import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
import React, {useState} from 'react';

let name = "Tajinder";

function App() {
  const [mode, setMode] = useState('light');
  return (
    <>
      <Navbar title="Second title" mode={mode}/>
      <div className="container p-4">
        <h1>My Name is {name}</h1>
      </div>
      <TextForm heading="This is a testing form."/>
      {/* <About/> */}
    </>
  );
}

export default App;
