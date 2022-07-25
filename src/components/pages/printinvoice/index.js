import React, {useRef, useState} from 'react';
import ReactToPrint from 'react-to-print';
import './index.css';
import './index.sass';
import {Container, Grid, Hidden, Modal} from '@mui/material';

import logo from '../../../asset/logo.png';

const Print = ()=> {
    const printerRef = useRef();
    const nowDate = new Date().toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"});
    const nowDateVn = new Date().toLocaleDateString('vi-VN', { weekday:"long", year:"numeric", month:"numeric", day:"numeric"});

    const [cusname, setCusname] = useState('')
    const [cusphone, setCusphone] = useState('')
    const [cusemail, setCusemail] = useState('')
    const [cusaddress, setCusaddress] = useState('')
    const [typepayment, setTypepayment] = useState('Cash - Tiền mặt')
    const [infopayment, setInfopayment] = useState('')
    const [listitem, setListItem] = useState([{des: 'Coc', qty: 1, price: 12500,total: 12500},{des: 'Coc', qty: 1, price: 12500,total: 12500}])

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
      <Container maxWidth="fixed">
        <Container maxWidth="fixed" className="print-box">
            <div className="info-customer-input">
                <Grid container spacing={0}>
                  <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                  <div className="name-customer-input detailbox">
                    <Grid container spacing={0}>
                      <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                      <div className="label-customer">Tên khách hàng: </div>  
                      </Grid> 
                      <Grid item xs={12} sm={12} md={8} lg={8} xl={8}>
                      <input type="text" placeholder="Customer name" value={cusname} onChange={(e)=>{setCusname(e.target.value)}}/>   
                      </Grid> 
                    </Grid>
                  </div>
                  </Grid>
                  <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                  <div className="phone-customer-input detailbox">
                    <Grid container spacing={0}>
                      <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                      <div className="label-customer">Số điện thoại: </div>  
                      </Grid> 
                      <Grid item xs={12} sm={12} md={8} lg={8} xl={8}>
                      <input type="number"
                      placeholder="Customer phonenumber" value={cusphone} 
                      onChange={(e)=>{setCusphone(e.target.value)}}/> 
                      </Grid> 
                    </Grid> 
                  </div>
                  </Grid>
                  <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                  <div className="email-customer-input detailbox">
                    <Grid container spacing={0}>
                      <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                      <div className="label-customer">Email: </div>  
                      </Grid> 
                      <Grid item xs={12} sm={12} md={8} lg={8} xl={8}>
                      <input type="email"
                      placeholder="Customer email" value={cusemail} 
                      onChange={(e)=>{setCusemail(e.target.value)}}/> 
                      </Grid> 
                    </Grid>    
                  </div>
                  </Grid>
                  <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                  <div className="address-customer-input detailbox">
                    <Grid container spacing={0}>
                      <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                        <div className="label-customer">Địa chỉ: </div>  
                      </Grid> 
                      <Grid item xs={12} sm={12} md={8} lg={8} xl={8}>
                      <input type="text"
                      placeholder="Customer address detailbox" value={cusaddress} 
                      onChange={(e)=>{setCusaddress(e.target.value)}}/> 
                      </Grid> 
                    </Grid>     
                  </div>
                  </Grid>
                </Grid>
            </div>
          </Container>

        <Container maxWidth="fixed" className="payment-method-input-box">
           <Grid container spacing={0}>
             <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
              <div className="payment-choose">
                  <Grid container spacing={0}>
                    <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                      <div className="label-payment">Phương thức thanh toán:</div>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                      <div className="select-box">
                      <select className="select-payment"
                      onChange={(e)=>{
                          switch (e.target.value){
                            case 'bank':
                              setTypepayment('Banking - Chuyển khoản')
                              break;
                            case 'card':
                              setTypepayment('Card - Quẹt thẻ')
                              break;
                            case 'insm':
                              setTypepayment('Installment- Trả góp')
                              break;
                            default :
                              setTypepayment('Cash - Tiền mặt')
                              break;
                          }}}>
                      <option value="cash">Tiền mặt</option>
                      <option value="bank">Chuyển khoản</option>
                      <option value="card">Quẹt thẻ</option>
                      <option value="insm">Trả góp</option>
                    </select>
                    </div>  
                    </Grid>
                  </Grid>
                </div>
             </Grid>
             <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
              <div className="payment-info">
                <Grid container spacing={0}>
                  <Grid item={12} sm={12} md={6} lg={6} xl={6}>
                    <div className="label-payment">Thông tin thanh toán:</div>
                  </Grid>
                  <Grid item={12} sm={12} md={6} lg={6} xl={6}>
                    <input type="text" placeholder="Payment info" 
                    onChange={(e)=>{setInfopayment(e.target.value)}}/> 
                  </Grid>
                </Grid>
              </div>
             </Grid>
           </Grid>
        </Container>
        <Container maxWidth="fixed" className="details-product-invoice">
            <div className="plus-button" onClick={handleOpen}>Thêm mới</div>
            <Container maxWidth="fixed" className="table-product">
                <Container className="th-table" maxWidth="fixed">
                  <Grid container spacing={0}>
                    <Grid item xs={1} sm={1} md={1} lg={1} xl={1}><div className="th-add">#</div></Grid>
                    <Grid item xs={5} sm={5} md={5} lg={5} xl={5}><div className="th-add">Mô tả</div></Grid>
                    <Grid item xs={1} sm={1} md={1} lg={1} xl={1}><div className="th-add">Số lượng</div></Grid>
                    <Grid item xs={2} sm={2} md={2} lg={2} xl={2}><div className="th-add">Đơn giá</div></Grid>
                    <Grid item xs={2} sm={2} md={2} lg={2} xl={2}><div className="th-add">Thành tiền</div></Grid>
                    <Grid item xs={1} sm={1} md={1} lg={1} xl={1}><div className="th-add"></div></Grid>
                  </Grid>
                </Container>
                {listitem.map((item,index)=>{
                  return(
                    <Container className="td-table" key={index}  maxWidth="fixed">
                      <Grid container spacing={0}>
                        <Grid item xs={1} sm={1} md={1} lg={1} xl={1}><div className="td-add">{index+1}</div></Grid>
                        <Grid item xs={5} sm={5} md={5} lg={5} xl={5}><div className="td-add">{item.des}</div></Grid>
                        <Grid item xs={1} sm={1} md={1} lg={1} xl={1}><div className="td-add">{item.qty}</div></Grid>
                        <Grid item xs={2} sm={2} md={2} lg={2} xl={2}><div className="td-add">{item.price}</div></Grid>
                        <Grid item xs={2} sm={2} md={2} lg={2} xl={2}><div className="td-add">{item.total}</div></Grid>
                        <Grid item xs={1} sm={1} md={1} lg={1} xl={1}><div className="th-add th-add-delete">Delete</div></Grid>
                      </Grid>
                    </Container>
                  )
                })}
            </Container>
        </Container>
        <ReactToPrint
          trigger={() => <button className="button-print">In hóa đơn</button>}
          content={() => printerRef.current}
        />
        <br/>
        <div className="hidden-page">
        <Container ref={printerRef} className="print-page">
            <div className="invoice-header">
                <div className="grheader">
                <Grid container spacing={0}>
                    <Grid item xs={3} sm={3} md={3} lg={3} xl={3}><div className="gritem"><div className="line-logo"></div></div></Grid>
                    <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                        <div className="gritem"><img src={logo} className="logo-header" alt="NooKarat"/></div>
                    </Grid>
                    <Grid item xs={3} sm={3} md={3} lg={3} xl={3}><div className="gritem"><div className="line-logo"></div></div></Grid>
                </Grid>
                </div>
            </div>
            <div className="invoice-label">
              <Grid container spacing={0}>
                <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                  <div className="customer-info">
                    <div className="invoice-to">Invoice to <i>(Khách hàng)</i>:</div>
                    <div className="name-customer">{cusname}</div>
                    <div className="details-customer">{cusphone}</div>
                    <div className="details-customer">{cusemail}</div>
                    <div className="details-customer">{cusaddress}</div>
                  </div>
                </Grid>
                <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                  <div className="invoice-info">
                    <div className="invoice">INVOICE</div>
                    <div className="no-invoice">No. 00001</div>
                    <div className="day-invoice">{nowDate}</div>
                    <hr/>
                    <div className="invoice-vn">HÓA ĐƠN</div>
                    <div className="no-invoice">Số. 00001</div>
                    <div className="day-invoice">{nowDateVn}</div>
                  </div>
                </Grid>
              </Grid>
            </div>
            <div className="td-invoice">
              <Grid container spacing={0}>
                  <Grid item xs={1} sm={1} md={1} lg={1} xl={1}><div className="td-text">#</div></Grid>
                  <Grid item xs={5} sm={5} md={5} lg={5} xl={5}><div className="td-text">Description</div><div className="td-vn">Mô tả</div></Grid>
                  <Grid item xs={1} sm={1} md={1} lg={1} xl={1}><div className="td-text">QTY</div><div className="td-vn">Số lượng</div></Grid>
                  <Grid item xs={2} sm={2} md={2} lg={2} xl={2}><div className="td-text">Price</div><div className="td-vn">Đơn giá</div></Grid>
                  <Grid item xs={3} sm={3} md={3} lg={3} xl={3}><div className="td-text">Total</div><div className="td-vn">Thành tiền</div></Grid>
              </Grid>
            </div>
            <div className="th-invoice">
              <Grid container spacing={0}>
                  <Grid item xs={1} sm={1} md={1} lg={1} xl={1}><div className="th-text">1</div></Grid>
                  <Grid item xs={5} sm={5} md={5} lg={5} xl={5}>
                    <div className="th-text th-des">Cọc nhẫn vàng #00001</div>
                  </Grid>
                  <Grid item xs={1} sm={1} md={1} lg={1} xl={1}><div className="th-text">1</div></Grid>
                  <Grid item xs={2} sm={2} md={2} lg={2} xl={2}><div className="th-text">1.500.000</div></Grid>
                  <Grid item xs={3} sm={3} md={3} lg={3} xl={3}><div className="th-text">1.500.000</div></Grid>
              </Grid>
            </div>
            <div className="th-invoice">
              <Grid container spacing={0}>
                  <Grid item xs={1} sm={1} md={1} lg={1} xl={1}><div className="th-text">2</div></Grid>
                  <Grid item xs={5} sm={5} md={5} lg={5} xl={5}>
                    <div className="th-text th-des">Phí dịch vụ abc xyz</div>
                  </Grid>
                  <Grid item xs={1} sm={1} md={1} lg={1} xl={1}><div className="th-text">1</div></Grid>
                  <Grid item xs={2} sm={2} md={2} lg={2} xl={2}><div className="th-text">150.000</div></Grid>
                  <Grid item xs={3} sm={3} md={3} lg={3} xl={3}><div className="th-text">150.000</div></Grid>
              </Grid>
            </div>
            <div className="total-invoice">
              <Grid container spacing={0}>
                <Grid item xs={9} sm={9} md={9} lg={9} xl={9}>
                  <div className="total-label">
                    <div className="label-total">Sub-Total &nbsp;</div>
                    <div className="label-total-vn">(Thành tiền) </div>
                  </div>
                </Grid>
                <Grid item xs={3} sm={3} md={3} lg={3} xl={3}><div className="total-num">1.650.000</div></Grid>
              </Grid>
            </div>
            <div className="vat-invoice">
              <Grid container spacing={0}>
                <Grid item xs={9} sm={9} md={9} lg={9} xl={9}>
                  <div className="total-label">
                    <div className="label-total">VAT &nbsp;</div>
                    <div className="label-total-vn">(0%) </div>
                  </div>
                </Grid>
                <Grid item xs={3} sm={3} md={3} lg={3} xl={3}><div className="total-vat-num">0</div></Grid>
              </Grid>
            </div>
            <div className="total-invoice">
              <Grid container spacing={0}>
                <Grid item xs={9} sm={9} md={9} lg={9} xl={9}>
                  <div className="total-label">
                    <div className="label-total">Total &nbsp;</div>
                    <div className="label-total-vn">(Tổng cộng) </div>
                  </div>
                </Grid>
                <Grid item xs={3} sm={3} md={3} lg={3} xl={3}><div className="total-num">1.650.000</div></Grid>
              </Grid>
            </div>
            <div className="payment-invoice">
              <div className="payment-method">
                <div className="method-invoice">- Payment Method &nbsp;</div>
                <div className="method-invoice-vn">(Phương thức thanh toán): &nbsp;&nbsp;</div>
                <div className="type-method">
                  {typepayment}
                </div>
              </div>
              <div className="payment-method-info">
                <div className="method-invoice">- Payment Info &nbsp;</div>
                <div className="method-invoice-vn">(Thông tin thanh toán): &nbsp;&nbsp;</div>
                <div className="type-payment">{infopayment}</div>
              </div>
            </div>
            <div className="sig-invoice">
              <Grid container spacing={0}>
                <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                  <div className="label-sig-nookarat">NooKarat</div>
                </Grid>
                <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                  <div className="label-sig-customer">Customer</div>
                  <div className="label-sig-customer-vn">(Khách hàng)</div>
                </Grid>
              </Grid>
            </div>
        </Container>
        </div>
        <Modal
          open={open}
          onClose={handleClose}
        >
          <div className="modal-add">
            <div className="label-modal-add">Thêm mới</div>
            <div className="details-modal-add">
              <div className="details-input-modal input-des-modal">
                <Grid container spacing={0}>
                  <Grid item xs={4} sm={4} md={3} lg={2} xl={2}>
                    <div className="label-detail-modal-input">Mô tả</div>
                  </Grid>
                  <Grid item xs={8} sm={8} md={9} lg={10} xl={10}>
                    <div className="box-detail-modal-input">
                      <input type="text" placeholder="Description" />
                    </div>
                  </Grid>
                </Grid>
              </div>
              <div className="details-input-modal input-qty-modal">
                <Grid container spacing={0}>
                  <Grid item xs={4} sm={4} md={3} lg={2} xl={2}>
                    <div className="label-detail-modal-input">Số lượng</div>
                  </Grid>
                  <Grid item xs={8} sm={8} md={9} lg={10} xl={10}>
                    <div className="box-detail-modal-input">
                      <input type="number" defaultValue={1}/>
                    </div>
                  </Grid>
                </Grid>
              </div>
              <div className="details-input-modal input-des-modal">
                <Grid container spacing={0}>
                  <Grid item xs={4} sm={4} md={3} lg={2} xl={2}>
                    <div className="label-detail-modal-input">Đơn giá</div>
                  </Grid>
                  <Grid item xs={8} sm={8} md={9} lg={10} xl={10}>
                    <div className="box-detail-modal-input">
                      <input type="number" placeholder="Price" />
                    </div>
                  </Grid>
                </Grid>
              </div>
              <div className="button-box-modal-add">
                <Grid container spacing={0}>
                  <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                    <div className="button-modal-add button-modal-add-exit">
                      Thoát
                    </div>
                  </Grid>
                  <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                  <div className="button-modal-add button-modal-add-enter">
                      Thêm
                    </div>
                  </Grid>
                </Grid>
              </div>
            </div>
          </div>
        </Modal>
      </Container>
    );
}

export default Print;
