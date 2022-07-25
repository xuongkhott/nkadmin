import React from 'react';
import './App.css';
import './config.css';
import './global.sass'

import {Container, Grid, Hidden} from '@mui/material';

// Router
import {BrowserRouter as Router, Routes, Route, useLocation} from 'react-router-dom';

// Components
import Leftnav from './components/leftnav/index';
import Home from './components/pages/home';
import Products from './components/pages/products/index';
import AllNews from './components/pages/news/all';
import AddNews from './components/pages/news/add';
import EditNews from './components/pages/news/edit';
import Customers from './components/pages/customers/index';
import PrintInvoice from './components/pages/printinvoice/index';


const App = ()=>{
  return(
    
    <Container maxWidth="fixed" disableGutters={true} className="app">
      <Router>
      <Grid container spacing={0} className="main">
        <Grid item lg={2} xl={2}>
          <Leftnav/>
        </Grid>
        <Grid item lg={10} xl={10}>
              <Routes>
                <Route index path="/" element={<Home/>}/>
                <Route path="/products" element={<Products/>}/>
                <Route path="/customers" element={<Customers/>}/>
                <Route path="/products/:tprod" element={<Products/>}/>
                <Route path="/news" element={<AllNews/>}/>
                <Route path="/news/add" element={<AddNews/>}/>
                <Route path="/news/:pathnew" element={<EditNews/>}/>
                <Route path="/invoice" element={<PrintInvoice/>}/>
                <Route path="*" element={<Home/>}/>
            </Routes>
        </Grid>
      </Grid>
      </Router>
    </Container>
  )
}

export default App