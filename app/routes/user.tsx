import UserList from "~/components/UserLists";

export default function UserPage() {
  return <div className="bg-gray-300 p-4">
<div className="p-2 flex justify-center"><h1 className="text-7xl font-extrabold  text-indigo-600">User Directory Viewer</h1></div>
    <UserList />
  </div>;
}
