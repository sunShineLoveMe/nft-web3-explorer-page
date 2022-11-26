import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App';
import MainPageComponent from './component/mainpagecomponent';
import MintPageComponent from './component/mintpagecomponent';
import NFTListComponent from './component/nftlistcomponent';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<App />} >
          {/* 孩子路由，url为:  / + 孩子的path */}
          <Route path='profile' element={<MainPageComponent />} /> 
          <Route path='mint' element={<MintPageComponent />} />
          <Route path='list' element={<NFTListComponent />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
