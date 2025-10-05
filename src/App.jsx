import React, { useEffect, useState } from 'react';
import UserForm from './components/UserForm';
import UsersTable from './components/UsersTable';
import { getUsers } from './services/api';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);
  const [loadingUsers, setLoadingUsers] = useState(false);
  const [usersError, setUsersError] = useState(null);

  const fetchUsers = async () => {
    setUsersError(null);
    setLoadingUsers(true);
    try {
      const data = await getUsers();
      setUsers(data);
    } catch (err) {
      setUsersError('Could not load users.');
    } finally {
      setLoadingUsers(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="container" style={{ padding: 20, maxWidth: 800, margin: '0 auto' }}>
      <h1>Atom Internship — Users</h1>
      <UserForm onSuccess={fetchUsers} />
      <UsersTable users={users} loading={loadingUsers} error={usersError} />
    </div>
  );
}

export default App;
