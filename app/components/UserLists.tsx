import React, { useEffect, useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { useNavigate } from 'react-router';
import { ProgressSpinner } from 'primereact/progressspinner';
import { Message } from 'primereact/message';

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
}

function UserList() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data: User[] = await response.json();
        setUsers(data);
      } catch (e: any) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const onRowSelect = (event: any) => {
    navigate(`/users/${event.data.id}`);
  };

  if (loading) {
    return (
   <div className="flex flex-col items-center justify-center" style={{ height: '100vh' }}>
     <ProgressSpinner />
     <p className="mt-4">Loading user details...</p>
   </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-content-center align-items-center" style={{ height: '100vh' }}>
        <Message severity="error" text={`Error: ${error}`} />
      </div>
    );
  }

  return (
    <div className="card mt-4 mx-auto" style={{ maxWidth: '900px' }}>
     
      <DataTable
        value={users}
        selectionMode="single"
        onRowSelect={onRowSelect}
        dataKey="id"
        paginator
        rows={10}
        removableSort
        stripedRows
        tableStyle={{ minWidth: '50rem' }}
      >
        <Column field="name" header="Name" sortable />
        <Column field="username" header="Username" sortable />
        <Column field="email" header="Email" sortable />
        <Column field="phone" header="Phone" />
        <Column field="website" header="Website" />
      </DataTable>
    </div>
  );
}

export default UserList;
