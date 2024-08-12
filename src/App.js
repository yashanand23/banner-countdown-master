import React, { useState } from 'react';
import Banner from './Components/Banner';
import Dashboard from './Components/Dashboard';
import './App.css';

function App() {
  const [visible, setVisible] = useState(true);
  const [description, setDescription] = useState("Welcome to our website!");
  const [timer, setTimer] = useState(10);
  const [link, setLink] = useState("#");

  return (
    <div className="App">
      <Dashboard 
        setVisible={setVisible} 
        setDescription={setDescription} 
        setTimer={setTimer} 
        setLink={setLink} 
      />
      <Banner 
        visible={visible} 
        description={description} 
        timer={timer} 
        link={link} 
      />
    </div>
  );
}

export default App;
