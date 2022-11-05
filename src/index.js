import React from 'react';
import ReactDOM from 'react-dom/client';
import DeleteClient from './screens/deleteClient/DeleteClient';
import CreateClient from './screens/createClient/CreateClient';
import ViewClient from './screens/viewClient/ViewClient';

import './index.css';
import reportWebVitals from './reportWebVitals';
import UpdateClient from './screens/updateClient/UpdateClient';
import CreateProperty from './screens/createProperty/CreateProperty';
import UpdateProperty from './screens/updateProperty/UpdateProperty';
import ViewProperty from './screens/viewProperty/ViewProperty';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ViewProperty/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
