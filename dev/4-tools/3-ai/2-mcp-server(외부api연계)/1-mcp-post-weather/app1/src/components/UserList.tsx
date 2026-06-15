import React, { useEffect, useState } from 'react';
import { jsonPlaceholderService } from '../services/api';
import { User } from '../types';

const UserList: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const data = await jsonPlaceholderService.getUsers();
        setUsers(data);
        setError(null);
      } catch (err) {
        setError('사용자 정보를 불러오는 중 오류가 발생했습니다.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) {
    return <div>로딩 중...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <div className="user-list">
      <h2>사용자 목록</h2>
      <div className="users">
        {users.map(user => (
          <div key={user.id} className="user-card">
            <h3>{user.name}</h3>
            <p><strong>이메일:</strong> {user.email}</p>
            <p><strong>웹사이트:</strong> {user.website}</p>
            <p><strong>회사:</strong> {user.company.name}</p>
            <p><strong>도시:</strong> {user.address.city}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserList; 