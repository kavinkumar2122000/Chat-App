// UserList.js
import React from 'react';

const UserList = ({ users }) => {
  return (
    <div className="user-list">
      <h2>Users</h2>
      <ul>
        {users.map((user) => (
          <li key={user}>{user}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
