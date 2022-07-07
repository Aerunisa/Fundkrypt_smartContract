import React from 'react';
//import ReactDOM from 'react-dom';
import ReactDOM from 'react-dom/client';
//import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
import {TransactionsProvider} from './context/TransactionContext';

// ReactDOM.render(
//   <TransactionsProvider>
//     <App />
//   </TransactionsProvider>,
//   document.getElementById("root"),
// );
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <TransactionsProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </TransactionsProvider>
);