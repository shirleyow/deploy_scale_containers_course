import React, { useEffect, useState } from 'react';
import image from './fortune-cookie.avif';

function App() {
  const [message, setMessage] = useState('');
  useEffect(() => {
    fetch('/api')
      .then((res) => res.text())
      .then((data) => setMessage(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div style={{textAlign: "center"}}>
      <h1><img src={image} width="150" alt='fortune-cookie'></img>{message}</h1>
      <h4>Repository: <a href='https://github.com/shirleyow/cfdsa-precourse'>https://github.com/shirleyow/cfdsa-precourse</a></h4>
    </div>
  );
}
export default App;