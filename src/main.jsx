import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import VideoWatch from './Components/VideoWatch.jsx';
import Body from './Components/Body.jsx';

const router = createBrowserRouter([ 
  { 
    path:'/',
    element:<App/>,
    children:[
      {
       index:true,
       element:<Body/>,
      },
      {
        path:'watch',
        element:<VideoWatch/>,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode >
);

