import { useEffect, useState } from 'react';
import Layout from './components/layout';
import Main from './page/Main';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import styled from 'styled-components';
import './App.css';

const router = createBrowserRouter([ //배열을 라우터에 전달
  {
    path: "/",
    element: <Layout />,
    children: [ // Layout의 요소!
      {
        path: "", // "" == "/" -> 그래서 루트 링크에 들어가면 Outlet으로 Home이 렌더링되는 것임!
        element: <Main />,
      }
    ]
  }
]);

function App() {
  return (
    <div className='body'>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
