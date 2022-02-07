import React from 'react';
import './index.css';

import styled from 'styled-components';

// Components
import {SidebarData} from './components/sidebardata';
import Item from './components/item';

const Nav = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    background-color: rgb(28,28,28);
    width: 90%;
    
`;
const Sticky = styled.div`
    position: sticky;
    top: 10vh;
`;

const Leftnav = ()=>{
    return(
        <Nav>
            <Sticky>
            {SidebarData.map((item, index)=>{
                return(
                    <Item item={item} key={index} bkg='rgb(28,28,28)'/>
                )
            })}
            </Sticky>
        </Nav>
    )
}

export default Leftnav