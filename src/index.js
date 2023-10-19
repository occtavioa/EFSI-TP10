import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './routes/Home/Home';
import Projects from './routes/Projects';
import Info from './routes/Info';
import Layout from './routes/Layout';
import Detail from './routes/Detail';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: async () => {
          return await fetch(`${process.env.PUBLIC_URL}/projects.json`)
        }
      },
      {
        path: "projects",
        element: <Projects />,
        loader: async () => {
          return await fetch(`${process.env.PUBLIC_URL}/projects.json`)
        }
      },
      {
        path: "projects/:id",
        element: <Detail />,
        loader: async () => {
          return await fetch(`${process.env.PUBLIC_URL}/projects.json`)
        }
      },
      {
        path: "info",
        element: <Info />
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
