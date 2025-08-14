# 📇 User Directory Viewer

A small React application for viewing a list of users and their detailed profiles, built with **React**, **TypeScript**, and **PrimeReact**.

---

## ✨ Features

- A simple home/landing page
- **User List Page** – Fetches and displays a list of users from a public API using a PrimeReact DataTable.  
- **User Detail Page** – Shows detailed information for a specific user in a PrimeReact Card.  
- **Client-Side Routing** – Uses React Router v7 to navigate between the list (`/users`) and detail (`/users/:id`) views.

---

## 🚀 Technologies

- **[React](https://react.dev/)** – JavaScript library for building user interfaces  
- **[TypeScript](https://www.typescriptlang.org/)** – Adds static type-checking to JavaScript  
- **[React Router v7](https://reactrouter.com/)** – Declarative navigation for React apps  
- **[PrimeReact](https://primereact.org/)** – UI component library for React  
- **[Vite](https://vitejs.dev/)** – Lightning-fast frontend build tool  
- **[Storybook](https://storybook.js.org/)** – Develop and test UI components in isolation  

---

## 🛠️ Getting Started

### **Prerequisites**
Make sure you have [Node.js](https://nodejs.org/) and npm installed.

### **Installation**
```bash
git clone https://github.com/rojenrosal/adacatechtestfrontend.git
cd userdirectoryviewer 
npm install
```


## 🖥 Development

Start the development server with Hot Module Replacement (HMR):

```bash
npm run dev
```

The app will be available at:
http://localhost:5173

## 📚 Storybook
```bash
npm run storybook
```

Storybook will open at:
http://localhost:6006

> [!WARNING]  
> **Storybook & React Router Plugin Issue**  
>  
> During development, I encountered an issue where **Storybook would fail to build** if the `reactRouter()` plugin was used instead of the basic `react()` plugin.  
>  
> Due to time constraints, I implemented a **temporary workaround** rather than a full fix. The solution involves **commenting out certain lines** and adding notes in the `**vite.config.ts**` code to indicate what should be **added or removed** depending on whether you're running the app in Storybook mode or regular development mode.  
>  
> This approach allows Storybook to work, but it’s a **band-aid solution**. a more robust fix is still needed.

## ⏱ Time Spent & Tradeoffs

I dedicated a little over **3 hours** to this project.  

- Spent a couple of hours **creating and styling components** using **TailwindCSS** and **PrimeReact**.  
- Implemented **routing** between pages, along with **simple loading and error handling**.  
- Encountered a **storybook build issue** (related to the `reactRouter()` plugin), which consumed a significant portion of development time.  
- Due to this, I was **unable to make most pages/components fully responsive**.  
- Implemented a **simple landing page**. prioritizing functionality over extraordinary design, focusing on delivering a **working and maintainable application**.  


