import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './Components/reduxToolkit__/store';
// import store from './Components/Redux/store';
// import store from './Components/ReduxThunk/store';
// import store from "./Components/PageReduxSearch/store"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  // </React.StrictMode>
);
