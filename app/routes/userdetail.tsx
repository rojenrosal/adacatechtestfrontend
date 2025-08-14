import UserDetail from "~/components/UserDetail";

export default function UserDetailPage() {
  return<div className="bg-gray-300 p-4">
<div className="p-2 flex justify-center mb-4"><h1 className="text-4xl font-extrabold  text-indigo-600">User Details Page</h1></div>
     <UserDetail />
  </div>;
}