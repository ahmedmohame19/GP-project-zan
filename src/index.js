import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import Courser from './components/Courser/Courser'
import 'react-toastify/dist/ReactToastify.css'

import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'
import 'swiper/swiper-bundle.css'
import { ToastContainer } from 'react-toastify'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Courser/>
    <App />
    <ToastContainer position='bottom-right' stacked />
  </React.StrictMode>
)

reportWebVitals()
