import React, {useState} from 'react';
import './item.sass'

import {Link} from 'react-router-dom';

import * as RiIcons from 'react-icons/ri';

const Item = ({item})=>{
    const [showSub, setShowSub] = useState(false);
    return(
        <div className="itemdiv">
            <div className="itemlabel">
                <div>
                <Link className="itemlink" to={item.url ? item.url : '#'}><span className="itemspan">{item.label}</span></Link>
                </div>
                {item.subMenu ? <div>
                    {showSub ? <RiIcons.RiArrowUpSFill size={'1.2em'} color="white" onClick={()=>{setShowSub(!showSub)}}/> : <RiIcons.RiArrowDownSFill size={'1.2em'} color="white" onClick={()=>{setShowSub(!showSub)}}/>}
                </div> : null}
            </div>
            {item.subMenu && showSub ? 
            item.subMenu.map((item, index)=>{
                return(
                    <Item item={item} key={index}/>
                )
            }) : null}
        </div>
    )
}

export default Item;