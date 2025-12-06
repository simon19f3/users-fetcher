import React from "react";

const UserCard = ({ user }) => {
  return (
    <div className="user-card">
      <h3>{user.name}</h3>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Username:</strong> {user.username}</p>
      <p><strong>City:</strong> {user.address.city}</p>
    </div>
  );
};

export default UserCard;
