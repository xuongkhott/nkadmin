import React, {useState ,useEffect} from 'react';
import './index.sass';
import {configapi} from '../../../../config'

import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import {Container} from '@mui/material'

const AllNews = ()=>{

    const [list, setList] = useState([])

    const navigate = useNavigate()

    useEffect(()=>{
        axios({
            method: 'post',
            url: configapi.getlistnews,
            headers: {
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Headers': '*',
               'Content-Type': 'application/json',
            },
            data: {
              type: 'all'
            }
          })
          .then(function (response) {
            //    if(response.data == false){
            //      setLoading(false);
            //    }else{
            //      setResdata(response.data);
            //    }
            setList(response.data)
          })
    },[])

    return(
    <Container maxWidth="fixed" disableGutters={true}>
        <div className="allnews">
            {list.map((item,index)=>{
                return(
                    <div key={index} onClick={()=>{navigate("/news/"+item.idpath)}}><div className="item-news">{item.title}</div><hr/></div>
                )
            })}
        </div>
    </Container>
    )
}

export default AllNews
