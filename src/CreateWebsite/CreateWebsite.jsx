
import { useState, useEffect } from 'react';
import axios from 'axios';

export const CreatingWebsite = (props) => {
  const { site } = props;
  const [message, setMessage] = useState('');

  useEffect(() => {
    
    const fetchData = async () => {
      try {
        const headers = {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJ1c2VyMTIzIiwiaWF0IjoxNjg4NDU1NDI4LCJleHAiOjE2ODg0NTkwMjh9.P2E6YfKnV-jDiKsOTrat3KWq3k5Sr-89cTQIXiueuMU`,
          'Content-Type': 'application/json'
        };

        const response = await axios.post('http://localhost:3000/website', site, { headers });
        console.log(response.data.message);
      } catch (error) {
        console.error(error); 
      }
      setMessage('');
    };

    fetchData();
  });

  return (
    <>
    </>
  );
};