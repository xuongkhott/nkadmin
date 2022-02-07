import React, {useState, useEffect} from 'react';

import { useParams } from 'react-router-dom';

import AddProd from './add/index';
import AllProd from './all/index';

const Products = ()=>{

    let params = useParams();
    const [page, setPage] = useState('');

    useEffect(()=>{
        setPage(params.tprod);
        console.log(params.tprod)
    },[params])

    switch (page){
        case 'add':
            return(<><AddProd/></>);
        default:
            return(<><AllProd/></>);
    }
}

export default Products