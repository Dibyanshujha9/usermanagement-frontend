import React, { useState } from 'react';
import { createUser } from '../services/api';

export default function UserForm({ onSuccess }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    if (!firstName.trim() || !lastName.trim()) {
      setError('Both first name and last name are required.');
      return;
    }
    setLoading(true);
    try {
      await createUser({ firstName: firstName.trim(), lastName: lastName.trim() });
      setFirstName('');
      setLastName('');
      onSuccess(); // tell parent to refresh
    } catch (err) {
      setError(err.response?.data?.error || 'Failed to create user.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="user-form">
      <div>
        <label>First Name</label><br />
        <input value={firstName} onChange={e => setFirstName(e.target.value)} />
      </div>
      <div style={{ marginTop: 8 }}>
        <label>Last Name</label><br />
        <input value={lastName} onChange={e => setLastName(e.target.value)} />
      </div>
      {error && <div className="error" style={{ color: 'red', marginTop: 8 }}>{error}</div>}
      <button type="submit" disabled={loading} style={{ marginTop: 10 }}>
        {loading ? 'Saving...' : 'Submit'}
      </button>
    </form>
  );
}
