import React, { useState, useEffect } from 'react';

const UserDropdown = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState('');
  const [entities, setEntities] = useState([]);

  useEffect(() => {
    // Fetch all users
    fetch('/api/users')
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  const handleUserChange = (e) => {
    const userId = e.target.value;
    setSelectedUser(userId);

    // Fetch entities created by the selected user
    fetch(`/api/entities?created_by=${userId}`)
      .then((res) => res.json())
      .then((data) => setEntities(data));
  };

  return (
    <div>
      <label htmlFor="userDropdown">Select User:</label>
      <select id="userDropdown" value={selectedUser} onChange={handleUserChange}>
        <option value="">-- Select a User --</option>
        {users.map((user) => (
          <option key={user._id} value={user._id}>
            {user.name}
          </option>
        ))}
      </select>

      <h3>Entities Created by Selected User:</h3>
      <ul>
        {entities.map((entity) => (
          <li key={entity._id}>{entity.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserDropdown;