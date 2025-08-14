import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { ProgressSpinner } from 'primereact/progressspinner';
import { Message } from 'primereact/message';

interface UserDetail {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

function UserDetail() {
  const { id } = useParams<{ id: string }>();
  const [user, setUser] = useState<UserDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      if (!id) {
        setError("User ID is missing.");
        setLoading(false);
        return;
      }
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data: UserDetail = await response.json();
        setUser(data);
      } catch (e: any) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [id]);

  if (loading) {
    return (
        <>
<div className="flex flex-col items-center justify-center" style={{ height: '100vh' }}>
  <ProgressSpinner />
  <p className="mt-4">Loading user details...</p>
</div>

      
         </>
    );
  }

  if (error) {
    return (
      <div className="flex justify-content-center align-items-center" style={{ height: '100vh' }}>
        <Message severity="error" text={`Error: ${error}`} />
        <Button label="Go to User List" icon="pi pi-arrow-left" className="p-button-text ml-3" onClick={() => navigate('/users')} />
      </div>
    );
  }

  if (!user) {
    return (
      <div className="flex justify-content-center align-items-center" style={{ height: '100vh' }}>
        <Message severity="info" text="User not found." />
        <Button label="Go to User List" icon="pi pi-arrow-left" className="p-button-text ml-3" onClick={() => navigate('/users')} />
      </div>
    );
  }

  const header = (
    <div className="flex align-items-center p-4">
      <i className="pi pi-user mr-2  ml-2 mt-1 text-3xl"></i>
      <h3 className="m-0 text-green-500 text-xl">{user.name}'s Profile</h3>
    </div>
  );

  const footer = (
    <Button label="Back to List" icon="pi pi-arrow-left" onClick={() => navigate('/users')} />
  );

  return (
    <div className="card mt-4 mx-auto" style={{ maxWidth: '600px' }}>
      <Card   header={header} footer={footer} className="shadow-2">
       <div className="p-fluid">
  <div className="flex align-items-center mb-2">
    <label className="mr-3 font-bold" style={{ width: '100px', textAlign: 'right' }}>Username:</label>
    <span>{user.username}</span>
  </div>
  <div className="flex align-items-center mb-2">
    <label className="mr-3 font-bold" style={{ width: '100px', textAlign: 'right' }}>Email:</label>
    <span>{user.email}</span>
  </div>
  <div className="flex align-items-center mb-2">
    <label className="mr-3 font-bold" style={{ width: '100px', textAlign: 'right' }}>Phone:</label>
    <span>{user.phone}</span>
  </div>
  <div className="flex align-items-center mb-2">
    <label className="mr-3 font-bold" style={{ width: '100px', textAlign: 'right' }}>Website:</label>
    <a href={`http://${user.website}`} target="_blank" rel="noopener noreferrer">
      {user.website}
    </a>
  </div>
  <div className="flex align-items-start mb-2">
    <label className="mr-3 font-bold" style={{ width: '100px', textAlign: 'right' }}>Address:</label>
    <span>
      {user.address.street}, {user.address.suite} <br />
      {user.address.city}, {user.address.zipcode}
    </span>
  </div>
  <div className="flex align-items-start">
    <label className="mr-3 font-bold" style={{ width: '100px', textAlign: 'right' }}>Company:</label>
    <span>
      <strong>{user.company.name}</strong> <br />
      "{user.company.catchPhrase}" <br />
      {user.company.bs}
    </span>
  </div>
</div>
      </Card>
    </div>
  );
}

export default UserDetail;
