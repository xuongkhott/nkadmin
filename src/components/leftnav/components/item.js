import React, {useState} from 'react';

import {Link} from 'react-router-dom';

import * as RiIcons from 'react-icons/ri';

import styled from 'styled-components';

const Itemdiv = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 1em;
`;

const Itemspan = styled.span`
    font-size: 1.2em;
    color: #fff;
`;

const Itemlabel = styled.div`
    display: flex;
    position: relative;
    justify-content: space-between;
    align-items: center;
    font-size: 1em;
    opacity: 0.9;
    margin: none;
    padding: 1em;
    transition: transform .2s;
    cursor: pointer;   
    
    &:hover{
        background-color: rgb(212,212,212);
        span{
            color: #000;
        }
    }
`;

const ItemLink = styled(Link)`
    text-decoration: none;
    font-family: "Helvetica";
`;

const Item = ({item, bkg})=>{
    const [showSub, setShowSub] = useState(false);
    return(
        <Itemdiv style={{backgroundColor: bkg}}>
            <Itemlabel>
                <div>
                <ItemLink to={item.url ? item.url : '#'}><Itemspan>{item.label}</Itemspan></ItemLink>
                </div>
                {item.subMenu ? <div>
                    {showSub ? <RiIcons.RiArrowUpSFill size={'1.2em'} color="white" onClick={()=>{setShowSub(!showSub)}}/> : <RiIcons.RiArrowDownSFill size={'1.2em'} color="white" onClick={()=>{setShowSub(!showSub)}}/>}
                </div> : null}
            </Itemlabel>
            {item.subMenu && showSub ? 
            item.subMenu.map((item, index)=>{
                return(
                    <Item item={item} key={index} bkg='rgb(36,36,36)'/>
                )
            }) : null}
        </Itemdiv>
    )
}

export default Item;