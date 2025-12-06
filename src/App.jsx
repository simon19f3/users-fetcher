import React, { useEffect, useState } from "react";
import api from "./api";
import UserCard from "./components/UserCard";
import "./styles.css";

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch users
  useEffect(() => {
    api
      .get("/users")
      .then((res) => {
        setUsers(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to fetch users.");
        setLoading(false);
      });
  }, []);

  if (loading) return <h2 className="center">Loading...</h2>;
  if (error) return <h2 className="center error">{error}</h2>;

  return (
    <div className="container">
      <h1 className="title">React Axios Users</h1>

      <div className="grid">
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}

export default App;
