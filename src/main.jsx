import React from 'react'
import ReactDOM from 'react-dom/client'
import "./index.css"
import {HomeTable} from "./components/HomeTable"

import { Home } from './components/Home.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>    
   <HomeTable></HomeTable>
   <Home></Home>
  </React.StrictMode>,
)
