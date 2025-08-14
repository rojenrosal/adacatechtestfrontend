import type { Route } from "./+types/home";
import { Link } from "react-router";

import UserList from "~/components/UserLists";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "User Directory Viewer" },
    { name: "a simple react app for viewing users", content: "Welcome to User Directory viewer!" },
  ];
}

export default function Home() {
  return (
    <div className="px-2 py-32 bg-gray-300 md:px-0">
      <div className="container items-center max-w-6xl mx-auto xl:px-5">
        <div className="flex flex-wrap items-center sm:-mx-3">
          <div className="w-full md:w-1/2 md:px-3">
            <div className="space-y-6 sm:max-w-md lg:max-w-lg">
              <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
                <span className="block xl:inline">Explore User Details  with this simple user     <span className="block text-indigo-600 xl:inline">React  Directory App</span>  </span>
              </h1>
              <p className="mx-auto text-base text-gray-500 sm:max-w-md lg:text-xl">
              Discover details about every user in this catalog!
              </p>
              <div className="flex flex-col sm:flex-row sm:space-x-4">
                <Link
                  to="/users"
                  className="flex items-center justify-center px-6 py-3 text-lg text-white bg-indigo-600 rounded-md hover:bg-indigo-700"
                >
                  Explore Now
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 ml-1"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </Link>
             
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <div className="overflow-hidden rounded-md shadow-xl">
              <img
                src="https://media.istockphoto.com/id/1180187740/photo/aerial-view-of-crowd-connected-by-lines.jpg?s=1024x1024&w=is&k=20&c=p8b6_NQrMisklHMnL3RN9_He57NoVbib_Zky-pLKeHQ="
                alt="people"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}