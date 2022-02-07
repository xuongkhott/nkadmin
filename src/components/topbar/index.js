import React from 'react';
import './index.css';

import {Container} from '@mui/material';

import styled from 'styled-components';

const Topbar = ()=>{
    return(
        <Container maxWidth="fixed" disableGutters={true}>
            <div className="topbar">
            </div>
        </Container>
    )
}

export default Topbar