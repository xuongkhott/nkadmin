import React, {useState, useRef, useEffect} from 'react';
import './index.sass';
import {configapi} from '../../../../config'
import { Editor } from '@tinymce/tinymce-react';

import {Container} from '@mui/material';
import axios from 'axios'

import * as VscIcons from 'react-icons/vsc';
import * as FiIcons from 'react-icons/fi';

import {  useParams } from "react-router-dom"

const EditNews = ()=>{

    let params = useParams();

    const [rawcontent, setRawContent] = useState();
    const editorRef = useRef(null);

    function getcontent(){
      axios({
        method: 'post',
        url: configapi.getcontent,
        headers: {
           'Access-Control-Allow-Origin': '*',
           'Access-Control-Allow-Headers': '*',
           'Content-Type': 'application/json',
        },
        data: {
          idnews: params.pathnew
        }
      })
      .then(function (response) {
           if(response.data === false){
             alert("Không tìm thấy bài viết!");
           }else{
            setRawContent(response.data);
           }
      })
    }

    useEffect(()=>{
      getcontent()        
    },[params.pathnew])

    function postData(){
        axios({
          method: 'post',
          url: configapi.editnew,
          headers: {
              'Content-Type': 'multipart/form-data',
              'accept': 'application/json',
              "Access-Control-Allow-Origin": "*",
              "Access-Control-Allow-Headers": "*"
          },
          data: {
            pathnew: params.pathnew,
            content: editorRef.current.getContent(),
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
             <div className="button-post" onClick={()=>{postData()}}>Click push</div>
            </div>
            <div className="hr-gold"></div>
            <div className="editor-box">
            <Editor
              apiKey='5a9t0e0gjv77t9kx2h89z8oeudblqkyh5m9euxm4rxuec5c3'
              onInit={(evt, editor) => editorRef.current = editor}
              initialValue={rawcontent ? rawcontent.content : null}
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

export default EditNews