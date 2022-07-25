import React from 'react';
import './index.sass'

// Components
import {SidebarData} from './components/sidebardata';
import Item from './components/item';

const Leftnav = ()=>{
    return(
        <div className="navbar">
            <div className="sticky">
                <div className="logo-box">

                </div>
            {SidebarData.map((item, index)=>{
                return(
                    <Item item={item} key={index}/>
                )
            })}
            </div>
        </div>
    )
}

export default Leftnav