import React, {useState, useEffect} from 'react';
import './index.css';

// import axios from 'axios';

import {dataListProd} from './sampledata/sampleData';

import {Container, Grid} from '@mui/material';

const AddProd = ()=>{
    const [newType, setNewType] = useState('');
    const [newName, setNewName] = useState('');
    const [newPrice, setNewPrice] = useState(0);
    const [newMinSize, setNewMinSize] = useState(1);
    const [newMaxSize, setNewMaxSize] = useState(50)

    

    return(
        <Container maxWidth="fixed" disableGutters={true}>
            <div className="header-page">
                <div className="text-gold-color label-pages">Thêm sản phẩm</div>
                <div className="hr-bottom-label"></div>
            </div>
            <Grid container spacing={0}>
                <Grid item lg={8} xl={8}>
                <div className="addprod">
                    <div className="row-add row1">
                        <div className="div-name-prod">
                            <label className="label-add label-name">Tên sản phẩm &nbsp;</label>
                            <input type="text" placeholder='Tên sản phẩm' className="input-name input-form-add" onChange={(e)=>{setNewName(e.target.value)}}/>
                        </div>
                    </div>
                    <div className="row-add row2 flexrow alcen">
                        <div className="div-type">
                            <label className="label-add">Danh mục &nbsp;</label>
                            <select className="select-type" onChange={(e)=>{setNewType(e.target.value)}}>
                                {dataListProd.map((item, index)=>{
                                    return(
                                        <option value={item.id} key={index}>{item.name}</option>
                                    )
                                })}
                            </select>
                        </div>
                        <div className="div-price-prod">
                            <label className="label-add label-name">Giá sản phẩm &nbsp;</label>
                            <input type="number" className="input-price input-form-add" onChange={(e)=>{setNewName(e.target.value)}} defaultValue={newPrice}/>
                        </div>
                    </div>
                    <div className="row-add row3">
                        <div className="div-size-prod">
                            <label className="label-add label-name">Size &nbsp;</label>
                            <input type="number" className="input-minSize input-form-add input-size" onChange={(e)=>{setNewMinSize(e.target.value)}} defaultValue={newMinSize}/>&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;
                            <input type="number" className="input-maxSize input-form-add input-size" onChange={(e)=>{setNewMaxSize(e.target.value)}} defaultValue={newMaxSize}/>
                        </div>
                    </div>
                    <div className="row-add row4">
                        <div className="div-info-prod flexcl">
                            <label className="label-add label-name">Thông tin sản phẩm &nbsp;</label>
                            <textarea className="input-info input-form-add" rows="10"/>
                        </div>
                    </div>
                    <div className="row-add row4">
                        <div className="div-info-prod flexcl">
                            <label className="label-add label-name">Thông tin sản phẩm &nbsp;</label>
                            <textarea className="input-info input-form-add" rows="10"/>
                        </div>
                    </div>
                    <div className="row-add row4">
                        <div className="div-info-prod flexcl">
                            <label className="label-add label-name">Thông tin sản phẩm &nbsp;</label>
                            <textarea className="input-info input-form-add" rows="10"/>
                        </div>
                    </div>
                    <div className="row-add row4">
                        <div className="div-info-prod flexcl">
                            <label className="label-add label-name">Thông tin sản phẩm &nbsp;</label>
                            <textarea className="input-info input-form-add" rows="10"/>
                        </div>
                    </div>
                </div>
                </Grid>
                <Grid item lg={1} xl={1}>
                    
                </Grid>
                <Grid item lg={3} xl={3}>
                                aa
                </Grid>
            </Grid>
        </Container>
    )
}

export default AddProd