import React from 'react';
import './App.css';
import './config.css';

import {Container, Grid, Hidden} from '@mui/material';

// Router
import {BrowserRouter as Router, Routes, Route, useLocation} from 'react-router-dom';

// Components
import Topbar from './components/topbar/index';
import Leftnav from './components/leftnav/index';
import Home from './components/pages/home';
import Products from './components/pages/products/index';



const App = ()=>{
  return(
    
    <Container maxWidth="fixed" disableGutters={true} className="app">
      <Router>
      <div className="topbarapp"><Topbar/></div>
      <Grid container spacing={0} className="main">
        <Grid item lg={2} xl={2}>
          <Leftnav/>
        </Grid>
        <Grid item lg={10} xl={10}>
              <Routes>
                <Route index path="/" element={<Home/>}/>
                <Route index path="/products" element={<Products/>}/>
                <Route index path="/products/:tprod" element={<Products/>}/>
                
                <Route path="*" element={<Home/>}/>
            </Routes>
        </Grid>
      </Grid>
      </Router>
    </Container>
  )
}

export default App