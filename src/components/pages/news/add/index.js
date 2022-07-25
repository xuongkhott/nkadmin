import React, {useState, useRef} from 'react';
import './index.sass';
import {configapi} from '../../../../config'
import { Editor } from '@tinymce/tinymce-react';

import {Container} from '@mui/material';
import axios from 'axios'

import * as VscIcons from 'react-icons/vsc';
import * as FiIcons from 'react-icons/fi';

import {Grid} from '@mui/material';

const AddNews = ()=>{

    const [title, setTitle] = useState('');
    const [newcate, setNewcate] = useState('khac');
    const [mainImg, setMainImg] = useState(null);

    const mainImgRef = useRef();

    const editorRef = useRef(null);

    const setChangeTitle = (value)=>{
      setTitle(value);
    };

    function postData(){
        axios({
          method: 'post',
          url: configapi.addnews,
          headers: {
              'Content-Type': 'multipart/form-data',
              'accept': 'application/json',
              "Access-Control-Allow-Origin": "*",
              "Access-Control-Allow-Headers": "*"
          },
          data: {
            title: title,
            content: editorRef.current.getContent(),
            newcate: newcate,
            image: mainImg
          }
        })
        .then(res => {
          console.log(res.data);
          })
      }

    return(
        <Container maxWidth="fixed">
        <div className="addnews">
            <div className="tool-bar">
              <Grid container spacing={0}>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                  <div className="bar1">
                    <div className="link-title">
                      <div className="title-content-label">Tiêu đề:</div>
                      <input type="text" 
                        className="input-title-content" 
                        placeholder="Tiêu đề bài viết"
                        onChange={(e)=>{
                          setChangeTitle(e.target.value)
                        }}/>
                    </div>
                    <div className="categories-news">
                      <div className="categories-news-label">Chuyên mục:</div>
                      <select className="select-categories" onChange={(e)=>{setNewcate(e.target.value)}}>
                        <option value="sale">Khuyến mãi</option>
                        <option value="kienthuc">Kiến thức</option>
                        <option value="phongthuy">Phong thủy</option>
                        <option value="bosuutap">Bộ sưu tập</option>
                        <option value="khac">Khác</option>
                      </select>
                    </div>
                  </div>
                </Grid>
                <Grid item xs={10} sm={10} md={5} lg={5} xl={5}>
                  <div className="bar2">
                  <div className="image-news">
                    <Grid container spacing={0}>
                      <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                          <div className="img-news"><div className="img-news-label" onClick={()=>{mainImgRef.current.click();}}>Ảnh bìa&nbsp; <FiIcons.FiUpload/></div></div>
                          <input type="file" accept="image/png, image/gif, image/jpeg" hidden ref={mainImgRef} onChange={(e)=>{if(e.target.files[0]){setMainImg(e.target.files[0])}}}/>
                      </Grid>
                      <Grid item xs={12} sm={12} md={8} lg={8} xl={8}>
                          <div className="news-image">
                              <div className="border-news-img">{mainImg ? 
                              <img className="review-img-news" alt="show-main-img" 
                                  src={URL.createObjectURL(mainImg)}
                              /> 
                              :null}</div>
                          </div>
                          </Grid>
                        </Grid>                    
                      </div>
                  </div>
                </Grid>
                <Grid item xs={2} sm={2} md={1} lg={1} xl={1}>
                  <div className="success">
                  <div className="button-success"
                    onClick={()=>{postData()}}><VscIcons.VscRepoPush/></div>
                  </div>
                </Grid>
              </Grid>
            </div>
            <div className="hr-gold"></div>
            <div className="editor-box">
            <Editor
              apiKey='5a9t0e0gjv77t9kx2h89z8oeudblqkyh5m9euxm4rxuec5c3'
              onInit={(evt, editor) => editorRef.current = editor}
              initialValue=""
              init={{
                height: 700,
                menubar: false,
                plugins: [
                  'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
                  'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                  'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount',
                  'image code',
                ],
                toolbar: 'undo redo | fontselect fontsizeselect | blocks | ' +
                  'bold italic underline | forecolor backcolor| alignleft aligncenter ' +
                  'alignright alignjustify | bullist numlist outdent indent | image code | table ' +
                  'removeformat | help',
                images_upload_url: configapi.imageupload,
                content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:18px; background-color: #000; color: #fff; }'
              }}
            />
            </div>
        </div>
       </Container>
    )
}

export default AddNews