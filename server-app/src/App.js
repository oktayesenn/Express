import React, {useEffect, useState} from 'react';
import backendData from './backendData.json';


function App() {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch('/api')
      .then(res => res.json())
      .then(data => setData(data));
  }, []);

  return (
    <div>
      {(typeof backendData.users === 'undefined') ? <p>Loading...</p> : <p>{backendData.users}</p>}
    </div>
  );
}

export default App;
