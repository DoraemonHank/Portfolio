import React, {Component} from 'react';

import {EditorState,convertToRaw } from "draft-js";
import {Editor} from "react-draft-wysiwyg"
import draftToHtml from "draftjs-to-html";
import PostService from '../services/post.service';
import ImageService from '../services/image.service';


function uploadImageCallBack(file) {
    // console.log(file)
    // return new Promise(
    //   (resolve, reject) => {
    //     const xhr = new XMLHttpRequest();
    //     xhr.open('POST', 'https://api.imgur.com/3/album',true);
    //     //xhr.setRequestHeader("Content-type", "application/json");
    //     xhr.setRequestHeader('Authorization', 'Client-ID 935f480dcd88fc9');
    //     const data = new FormData();
    //     data.append('image', file);
    //     data.append('album', "FHTv0p5");
    //     xhr.send(data);
    //     xhr.addEventListener('load', () => {
    //       const response = JSON.parse(xhr.responseText);
    //       console.log(response)
    //       resolve(response);
    //     });
    //     xhr.addEventListener('error', () => {
    //       const error = JSON.parse(xhr.responseText);
    //       console.log(error)
    //       reject(error);
    //     });
    //   }
    // );
    const formData = new FormData();
    formData.append('file-to-upload', file);
    return new Promise((resolve, reject) => {
      ImageService.post(formData)
      .then(data =>{
        resolve(data.data);
      })
      .catch(error =>{
        reject(error);
      })
    })
    //return ImageService.post(formData);
  }
  
  
class EditorContainer extends Component{
    constructor(props){
      super(props);
      this.state = {
        editorState: EditorState.createEmpty(),
        imgUrl: "",
        img:{},
        content:"",
        title:"",
        category:"",
        lang:"",
        order:0,
        tag:"",
        intro:""
      };
    }
  
    onEditorStateChange = (editorState) => {
      
      this.setState({
        editorState,
        content: draftToHtml(convertToRaw(editorState.getCurrentContent()))
      },() =>{
        console.log(this.state.content);
      });
    };

    onChange = e => {
      const file = e.target.files.item(0); // 取得選中檔案們的一個檔案
      //const fileReader = new FileReader(); // FileReader為瀏覽器內建類別，用途為讀取瀏覽器選中的檔案
      //fileReader.addEventListener("load", this.fileLoad);
      this.setState({
        img: file 
      });
      console.log(file);
      //fileReader.readAsDataURL(file); // 讀取完檔案後，變成URL
    };

    // fileLoad = e => {
    //   this.setState({
    //     imgUrl: e.target.result // 讀取到DataURL後，儲存在result裡面，指定為img
    //   });
    // };

    submit = () => {
      uploadImageCallBack(this.state.img)
      .then(img =>{
        //console.log(img)
        console.log(img.data.link)
        this.setState({
          imgUrl: img.data.link
        },() =>{
          console.log(this.state.imgUrl);
        });
      })
    };

    handleChangeTitle = (e) =>{
      this.setState({
        title: e.target.value
      },() =>{
        console.log(this.state.title);
      });

    };

    handleChangeCategory = (e) =>{
      this.setState({
        category: e.target.value
      },() =>{
        console.log(this.state.category);
      });

    };

    handleChangeLang = (e) =>{
      this.setState({
        lang: e.target.value
      },() =>{
        console.log(this.state.lang);
      });
    }

    handleChangeOrder = (e) =>{
      this.setState({
        order: e.target.value
      },() =>{
        console.log(this.state.order);
      });

    };

    handleChangeTag = (e) =>{
      this.setState({
        tag: e.target.value
      },() =>{
        console.log(this.state.tag);
      });
    }

    handleChangeIntro = (e) =>{
      this.setState({
        intro: e.target.value
      },() =>{
        console.log(this.state.intro);
      });
    }
  

    handleSubmit = () =>{
      PostService.post(this.state.title,this.state.category,
        this.state.order,this.state.tag,this.state.intro,this.state.imgUrl,this.state.lang,this.state.content
        )
      .then(response =>{
        console.log(response);
      })
      .catch(error =>{
        console.log(error.response);
      })

    }

    
    render(){
      const { editorState } = this.state;
      return (
        <div className='editor'>
          <div class="form-floating mb-3">
            <input type="text" class="form-control" id="floatingInput" placeholder="xxx" 
             onChange={this.handleChangeTitle}/>
            <label for="floatingInput">Title</label>
          </div>
          <div class="form-floating mb-3">
              <select class="form-select" id="floatingSelect" 
              aria-label="Floating label select example"
              onChange={this.handleChangeCategory}
              >
                <option ></option>
                <option value="web">網頁開發</option>
                <option value="dl">深度學習</option>
                <option value="unity">遊戲開發</option>
              </select>
              <label for="floatingSelect">Category</label>
          </div>
          <div class="form-floating mb-3">
              <select class="form-select" id="floatingSelect" 
              aria-label="Floating label select example"
              onChange={this.handleChangeLang}
              >
                <option ></option>
                <option value="tw">中文</option>
                <option value="en">英文</option>
              </select>
              <label for="floatingSelect">語言</label>
          </div>
          <div class="form-floating mb-3"> 
            <input type="number" class="form-control" id="floatingInput" placeholder="xxx" 
             onChange={this.handleChangeOrder}/>
            <label for="floatingInput">Order </label>
          </div>
          <div class="form-floating mb-3">
            <input type="text" class="form-control" id="floatingInput" placeholder="xxx" 
             onChange={this.handleChangeTag}/>
            <label for="floatingInput">Tag</label>
          </div>
          <div class="form-floating mb-3">
            <input type="text" class="form-control" id="floatingInput" placeholder="xxx" 
             onChange={this.handleChangeIntro}/>
            <label for="floatingInput">Intro</label>
          </div>
          <h1>圖片預覽與檔案上傳</h1>
          <div className="container">
            <input type="file" onChange={this.onChange} />
            {
              this.state.imgUrl && <img width="25%" src={this.state.imgUrl} alt=""/>
            }
            <button onClick={this.submit}>上傳</button>
          </div>
         
          <Editor
              editorState={editorState}
              onEditorStateChange={this.onEditorStateChange}    
              toolbar={{
              inline: { inDropdown: true },
              list: { inDropdown: true },
              textAlign: { inDropdown: true },
              link: { inDropdown: true },
              history: { inDropdown: true },
              image: { uploadCallback: uploadImageCallBack, alt: { present: true, mandatory: true } },
              }}
          />
          <div className="form-group">
            <button onClick={this.handleSubmit} className="btn btn-primary btn-block">
              <span>Submit</span>
            </button>
          </div>
        </div>
        )
    }
  }

  export default EditorContainer;
  