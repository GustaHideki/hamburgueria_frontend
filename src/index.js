import React from 'react';
import ReactDOM from 'react-dom/client';
import Routes from "./Routes"
import Globalstyles from './globalStyles/globalstyles';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Routes/> <Globalstyles/>
   </>
);
