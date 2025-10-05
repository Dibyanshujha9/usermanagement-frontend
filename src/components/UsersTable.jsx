import React from 'react';

export default function UsersTable({ users, loading, error }) {
  if (loading) return <div>Loading users...</div>;
  if (error) return <div style={{ color: 'red' }}>{error}</div>;
  if (!users || users.length === 0) return <div>No users submitted yet.</div>;

  return (
    <table style={{ marginTop: 16, borderCollapse: 'collapse', width: '100%' }}>
      <thead>
        <tr>
          <th style={{ border: '1px solid #ddd', padding: 8 }}>ID</th>
          <th style={{ border: '1px solid #ddd', padding: 8 }}>First Name</th>
          <th style={{ border: '1px solid #ddd', padding: 8 }}>Last Name</th>
        </tr>
      </thead>
      <tbody>
        {users.map(u => (
          <tr key={u.id}>
            <td style={{ border: '1px solid #ddd', padding: 8 }}>{u.id}</td>
            <td style={{ border: '1px solid #ddd', padding: 8 }}>{u.firstName}</td>
            <td style={{ border: '1px solid #ddd', padding: 8 }}>{u.lastName}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
