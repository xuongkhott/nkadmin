import React, {useState, useEffect} from 'react'
import './index.sass'
import axios from 'axios'
import {configapi} from '../../../config'

import {Grid} from '@mui/material'
import * as BsIcon from 'react-icons/bs'


const Customers = ()=>{
    const [active, setActive] = useState(0)
    const [componentRen, setComponentRen] = useState(<InsertCustomer/>)

    useEffect(()=>{
        switch (active){
            case 0:
                setComponentRen(<InsertCustomer/>);
                break;
            case 1:
                setComponentRen(<InfoCustomer/>);
                break;
            default:
                setComponentRen(<InsertCustomer/>);
                break;
        }
    },[active])


    return(
        <div className="customers-all-pages">
            <div className="customers-tab-pages">
                <div className={(active === 0 ? "tab-customers-active" : null) + " tab-add-customers tab-customers "} onClick={()=>{setActive(0)}}>Thêm mới</div> 
                <div className={(active === 1 ? "tab-customers-active" : null) + " tab-check-customers tab-customers "} onClick={()=>{setActive(1)}}>Thông tin</div>
            </div>
            <div className="contents-customers-tab-page">
                {componentRen}
            </div>
        </div>
    )
}

const InsertCustomer = ()=>{
    const [cusname,setCusname] = useState('');
    const [cusphone, setCusphone] = useState('');
    const [cusemail, setCusemail] = useState('');
    const [cusaddress, setCusaddress] = useState('');
    const [actionsuccess, setActionsuccess] = useState(false);

    const [typerequest, setTypeQuest] = useState('hoimau');
    const [timerequest, setTimeRequest] = useState('');
    const [note, setNote] = useState('');

    function setTime(){
        
    }

    function checkCustomerInfo(){
        if(cusname !== '' && cusphone !== ''){
            postInsertCustomer(cusname, cusphone, cusemail, cusaddress);
        }
    }

    function postInsertCustomer(setname, setphone, setemail, setaddress){
        axios({
            method: 'post',
            url: configapi.insertcustomer,
            headers: {
                'Content-Type': 'application/json;charSet=UTF-8',
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Headers": "*"
            },
            data: {
                customername: setname,
                customerphone: setphone,
                customeremail: setemail,
                customeraddress: setaddress
            }
          })
          .then(function (response) {
            if(response.data){
                axios({
                    method: 'post',
                    url: configapi.createrequest,
                    headers: {
                        'Content-Type': 'application/json;charSet=UTF-8',
                        "Access-Control-Allow-Origin": "*",
                        "Access-Control-Allow-Headers": "*"
                    },
                    data: {
                        id_customer: response.data,
                        id_staff: 'staff1',
                        type_request: typerequest,
                        time_request: timerequest,
                        status_request: 'created',
                        note: note
                    }
                  })
                  .then(function (response) {
                    
                  })
                  .catch(function (error) {
                    alert(error);
                  });
            }else{
                alert('Error insert!')
            }
          })
          .catch(function (error) {
            alert(error);
          });
    }

    return(
        <>
            <div className="idname-customer-input">
            <Grid container spacing={0}>
                <Grid item xs={12} sm={12} md={2} lg={2} xl={2}>
                    <div className="box-input-id-customer box-in-customer">
                        <input type="text" disabled value='NK_KHT' className="input-form-customer input-add"/>   
                    </div>    
                </Grid> 
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                    <div className="box-input-name-customer box-in-customer">
                        <input type="text" placeholder='Tên khách hàng' className="input-form-customer input-add" 
                        onChange={(e)=>{setCusname(e.target.value)}}/>   
                    </div>       
                </Grid> 
                <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                    <div className="box-input-phone-customer box-in-customer">
                        <input type="number" placeholder='Số điện thoại' className="input-form-customer input-add"
                        onChange={(e)=>{setCusphone(e.target.value)}}/>   
                    </div>       
                </Grid> 
            </Grid>
            <Grid container spacing={0}>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                    <div className="box-input-address-customer box-in-customer">
                        <input type="text" placeholder='Địa chỉ' className="input-form-customer input-add"
                        onChange={(e)=>{setCusaddress(e.target.value)}}/>   
                    </div>    
                </Grid> 
                <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
                    <div className="box-input-id-customer box-in-customer">
                        <select className="input-form-customer input-add" onChane={(e)=>{setTypeQuest(e.target.value)}}>
                            <option value="default"> - Trạng thái - </option>  
                            <option value="hoimau">Khách hỏi mẫu</option> 
                            <option value="chonmau">Khách chọn mẫu</option>  
                            <option value="hoidiachi">Khách hỏi địa chỉ</option>
                            <option value="hendosize">Khách hẹn đo size</option> 
                            <option value="dadosize">Khách đã đo size</option>
                        </select>   
                    </div>       
                </Grid>
                <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
                    <div className="box-input-id-customer box-in-customer">
                        <select className="input-form-customer input-add">
                            <option value="default"> - Kênh liên lạc - </option>  
                            <option value="facebook">Facebook</option> 
                            <option value="zalo">Zalo</option>  
                            <option value="instagram">Instagram</option>
                            <option value="phone">Gọi điện - tại cửa hàng</option>  
                        </select>     
                    </div>       
                </Grid> 
            </Grid>

            <Grid container spacing={0}>
                <Grid item xs={12} sm={12} md={2} lg={2} xl={2}>
                    <div className="box-input-address-customer box-in-customer">
                         
                    </div>    
                </Grid> 
                <Grid item xs={12} sm={12} md={1} lg={1} xl={1}>
                    <div className="box-input-id-customer box-in-customer">
                        <div className="label-input-customer">Thời gian hẹn: </div>
                    </div>       
                </Grid>
                <Grid item xs={8} sm={8} md={3} lg={3} xl={3}>
                    <div className="box-input-id-customer box-in-customer">
                        <input type="date" className="input-form-customer input-add"/>
                    </div>
                </Grid>
                <Grid item xs={4} sm={4} md={2} lg={2} xl={2}>
                    <div className="box-input-id-customer box-in-customer">
                    <input type="time" className="input-form-customer input-add"/>
                    </div>
                </Grid>
                <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                    <div className="box-input-id-customer box-in-customer">
                    <input type="text" placeholder="Ghi chú hẹn" className="input-form-customer input-add" onChange={(e)=>{setNote(e.target.value)}}/>
                    </div>
                </Grid>
            </Grid>
        </div>
        <div className="buttonbox-insert-customer">
            <div className="button-insert-customer first-button" onClick={()=>{checkCustomerInfo()}}>Thêm khách hàng</div>
        </div>
        </>
    )
}

const InfoCustomer = ()=>{
    return(
        <div className="info-customer">
            <div className="searchbox-customer">
                <div className="input-search-customer">
                    <input type="text" className="input-add" placeholder='Search thông tin'/>
                    <div className="button-search-customer"><BsIcon.BsSearch size={"15px"}/></div>
                </div>
            </div>
            <div className="hr-gold"/>
        </div>
    )
}

export default Customers