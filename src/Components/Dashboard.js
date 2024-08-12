import React, { useEffect, useState } from 'react';
import axios from 'axios'
import './Dashboard.css';

const Dashboard = ({ setVisible, setDescription, setTimer, setLink }) => {
  const [tempDescription, setTempDescription] = useState("");
  const [tempTimer, setTempTimer] = useState(10);
  const [tempLink, setTempLink] = useState("");

  useEffect(() => {
    axios.get('http://localhost:5000/api/banner')
    .then(response => {
      const { description, timer, link, is_visible } = response.data;
        setTempDescription(description);
        setTempTimer(timer);
        setTempLink(link);
        setVisible(is_visible);
      })
      .catch(error => console.error('Error fetching banner data:', error));
  }, [setVisible]);

  const handleUpdateBanner = () => {
    axios.put('http://localhost:5000/api/banner', {
      description: tempDescription,
      timer: tempTimer,
      link: tempLink,
      is_visible: true
    })
    .then(response => {
      console.log(response.data.message);
      setDescription(tempDescription);
      setTimer(tempTimer);
      setLink(tempLink);
      setVisible(true);
    })
    .catch(error => console.error('Error updating banner:', error));
  };
  
  return (
    <div className="dashboard">
      <h2>Banner Controls</h2>
      <div className="control">
        <label htmlFor="toggleBanner">Banner On/Off:</label>
        <button onClick={() => setVisible(prev => !prev)}>
          Toggle Banner
        </button>
      </div>
      <div className="control">
        <label htmlFor="description">Banner Description:</label>
        <input
          type="text"
          id="description"
          value={tempDescription}
          onChange={(e) => setTempDescription(e.target.value)}
        />
      </div>
      <div className="control">
        <label htmlFor="timer">Banner Timer (seconds):</label>
        <input
          type="number"
          id="timer"
          value={tempTimer}
          onChange={(e) => setTempTimer(e.target.value)}
        />
      </div>
      <div className="control">
        <label htmlFor="link">Banner Link:</label>
        <input
          type="text"
          id="link"
          value={tempLink}
          onChange={(e) => setTempLink(e.target.value)}
        />
      </div>
      <button onClick={handleUpdateBanner}>
        Update Banner
      </button>
    </div>
  );
};

export default Dashboard;
