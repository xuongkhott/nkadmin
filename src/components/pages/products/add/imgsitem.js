import React from 'react';
import styled from 'styled-components';

import * as RiIcons from 'react-icons/ri';

const BoxImg = styled.div`
    height: 100%;
    padding: 5px;
    border: 1px solid rgb(255,255,255,0.3);
    margin: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
   
`;

const BoxIconDelete = styled.div`
    position: absolute;
    top: 5px;
    right: 5px;
    border: 1px solid rgb(255,255,255, 0.5);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    padding: 3px;
    animation: transform 0.2s;
    &:hover{
        cursor: pointer;
        transform: scale(1.2);
    }
`;

const SetImg = styled.img `
    width: 90%;
    height: 100%;
    object-fit: cover;
`;

const ImgsItem = ({item, func})=>{
    return(
        <BoxImg>
            <BoxIconDelete onClick={()=>{func()}}><RiIcons.RiDeleteBin6Line size={15} color={"#ffffff"}/></BoxIconDelete>
            <SetImg src={URL.createObjectURL(item)}/>
        </BoxImg>
    )
}
export default ImgsItem;