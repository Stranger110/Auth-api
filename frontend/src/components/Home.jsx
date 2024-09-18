import React, { useState, useEffect } from 'react';
import { useUser } from '@clerk/clerk-react';

const Home = () => {
  const { user } = useUser();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Fetch user profile from the backend
    fetch('http://localhost:5000/user-profile', {
      headers: { Authorization: `Bearer ${user.primaryEmailAddress}` }
    })
    .then(response => response.json())
    .then(data => setUserData(data))
    .catch(error => console.error(error));
  }, [user]);

  const handleSaveData = () => {
    const data = { favoriteColor: 'blue' }; // Example data
    fetch('http://localhost:5000/save-user-data', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userId: user.id, data }),
    }).then(response => {
      if (response.ok) {
        alert('Data saved!');
      } else {
        alert('Error saving data.');
      }
    });
  };

  return (
    <div>
      <h1>Welcome, {user.fullName}!</h1>
      <button onClick={handleSaveData}>Save Data to Firebase</button>
      <pre>{JSON.stringify(userData, null, 2)}</pre>
    </div>
  );
};

export default Home;
