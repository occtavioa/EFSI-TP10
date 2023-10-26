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
import Favorites from './routes/Favorites';

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: async () => {
          return await fetch(`${process.env.PUBLIC_URL}/projects.json`).then(res => res.json())
        }
      },
      {
        path: "projects",
        element: <Projects />,
        loader: async () => {
          return await fetch(`${process.env.PUBLIC_URL}/projects.json`).then(res => res.json())
        }
      },
      {
        path: "projects/:id",
        element: <Detail />,
        loader: async ({params}) => {
          const {id} = params
          const projects = await fetch(`${process.env.PUBLIC_URL}/projects.json`).then(res => res.json())
          return projects.find((p) => p.id === parseInt(id))
        }
      },
      {
        path: "info",
        element: <Info />
      },
      {
        path: "favorites",
        element: <Favorites/>
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
