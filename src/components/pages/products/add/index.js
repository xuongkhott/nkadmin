import React, {useState, useEffect, useRef} from 'react';
import './index.css';
import './form.css';

// import axios from 'axios';

import {dataListProd} from './sampledata/sampleData';

import {Container, Grid, Hidden} from '@mui/material';

import * as FiIcons from 'react-icons/fi';

// Child
import ImgsItem from './imgsitem';

const AddProd = ()=>{
    const [newType, setNewType] = useState('');
    const [newName, setNewName] = useState('');
    const [newPrice, setNewPrice] = useState(0);
    const [newMinSize, setNewMinSize] = useState(1);
    const [newMaxSize, setNewMaxSize] = useState(50);
    const [mainImg, setMainImg] = useState(null);
    const [itemImgs, setItemImgs] = useState([]);

    // Ref
    const mainImgRef = useRef();
    const itemsImgRef = useRef();
    // effect
    useEffect(()=>{

    },[])

    // function
    async function addItemsImg(e){
        if(e.target.files[0]){
            var joined = itemImgs.concat(e.target.files[0]);
            setItemImgs(joined);
        }
    }

    function deleteImg(item){
        let newarr = itemImgs.filter((img)=>{return img!== item});
        setItemImgs(newarr);
    }

    useEffect(()=>{
        console.log(itemImgs);
    },[itemImgs])

    return(
        <Container maxWidth="fixed" disableGutters={true}>
            <div className="header-page">
                <div className="text-gold-color label-pages">Thêm sản phẩm</div>
                <div className="hr-bottom-label"></div>
            </div>
            <Container maxWidth="fixed">
               <div className="details-box">
               <Grid container spacing={0}>
                    <Grid item xs={12} sm={12} md={5} lg={5} xl={5}>
                        <div className="add-prod-left-panel">
                            <div className="add-prod-box">
                                <div className="add-prod-name">
                                    <input className="input-add input-prod-name" type="text" placeholder="Tên sản phẩm"/>
                                </div>
                            </div>
                            <div className="add-prod-box flexrow">
                                <div className="add-prod-price">
                                    <input className="input-add input-prod-price" type="text" placeholder="Giá sản phẩm"/>
                                </div>
                                <div className="add-prod-type">
                                    <select className="input-add input-prod-type">
                                        {dataListProd.map((item,index)=>{
                                            return(
                                                <option value={item.id} key={index}>{item.name}</option>
                                            )
                                        })}
                                    </select>
                                </div>
                            </div>
                            <div className="add-prod-box">
                                <div className="add-prod-info">
                                    <textarea className="input-add input-prod-info" rows="10" placeholder="Thông tin chi tiết"/>
                                </div>
                            </div>
                        </div>
                    </Grid>
                    <Hidden only={['xs','sm']}><Grid item md={1} lg={1} xl={1}></Grid></Hidden>
                    <Grid item xs={12} sm={12} md={5} lg={5} xl={5}>
                        <div className="add-prod-left-panel">
                            <div className="add-prod-img-label text-gold-color">Hình ảnh</div>
                            <div className="add-prod-img add-prod-img-main">
                                <Grid container spacing={0}>
                                    <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                                        <div className="img-main-box"><div className="img-main-label" onClick={()=>{mainImgRef.current.click();}}>Ảnh bìa&nbsp; <FiIcons.FiUpload/></div></div>
                                        <input type="file" accept="image/png, image/gif, image/jpeg" hidden ref={mainImgRef} onChange={(e)=>{if(e.target.files[0]){setMainImg(e)}}}/>
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={8} lg={8} xl={8}>
                                        <div className="main-image">
                                            <div className="border-main-img">{mainImg ? 
                                            <img className="img-main" 
                                                src={URL.createObjectURL(mainImg.target.files[0])}
                                            /> 
                                            :null}</div>
                                        </div>
                                    </Grid>
                                </Grid>                            
                            </div>
                            <hr/>
                            <div className="add-prod-img add-prod-img-item">
                                <div className="btn-imgs" onClick={()=>{itemsImgRef.current.click();}}>Thêm ảnh &nbsp; <FiIcons.FiUpload/></div>
                                <input type="file" accept="image/png, image/gif, image/jpeg" hidden ref={itemsImgRef} multiple onChange={(e)=>{addItemsImg(e)}}/>
                                <Grid container spacing={0}>
                                {itemImgs.map((item, index)=>{
                                    return(
                                        <Grid item xs={6} sm={6} md={6} lg={4} xl={4} key={index}>
                                            <ImgsItem item={item} func={()=>{deleteImg(item)}}/>
                                        </Grid>
                                    )   
                                })}
                                </Grid>
                            </div>
                        </div>
                    </Grid>
                </Grid>
               </div>
            </Container>
            <Container maxWidth="fixed" >
                <div className="action-box">
                    <Grid container spacing={0}>
                        <Grid item xs={12} sm={12} md={5} lg={5} xl={5}>
                            <div className="bottom-left-box">
                                <div className="pp-input id-product"><input type="text" disabled className="input-add input-id"/></div>
                                <div className="pp-input code-product"><input type="text" className="input-add input-code" placeholder='Code sản phẩm (Lưu ý nhập thẻ từ)'/></div>
                                <div className="pp-input size-product">
                                    <Grid container spacing={0}>
                                        <Grid item xs={6} sm={6} md={5} lg={5} xl={5}>
                                            <input type="number" className="input-add input-minsize" placeholder='Min Size'/>
                                        </Grid>
                                        <Hidden only={['xs', 'sm']}><Grid itemmd={1} lg={1} xl={1}></Grid></Hidden>
                                        <Grid item xs={6} sm={6} md={5} lg={5} xl={5}>
                                            <input type="number" className="input-add input-maxsize" placeholder='Max Size'/>
                                        </Grid>
                                    </Grid>
                                </div>
                            </div>
                        </Grid>
                        <Hidden only={['xs','sm']}>
                            <Grid item md={1} lg={1} xl={1}>
                                <div className="bottom-center-box"></div>
                            </Grid>
                        </Hidden>
                        <Grid item xs={12} sm={12} md={5} lg={5} xl={5}>
                            <div className="bottom-right-box">
                                <div className="btn-add btn-submit">Thêm sản phẩm</div>
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </Container>
        </Container>
    )
}

export default AddProd