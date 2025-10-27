import { createRoot } from 'react-dom/client'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import {ToastContainer} from 'react-toastify'
import App from './App.jsx'
import {BrowserRouter} from 'react-router'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <div className='container'>
      <App />
      <ToastContainer autoClose={2000}/>
    </div>
  </BrowserRouter>
)
