import React,{useState} from 'react'
import {Switch,Route} from "react-router-dom";
import EditorContainer from "./Compoents/EditorContainer";


const App = () =>{


    return (
        <div>
            <h2>Test with React Draft Wysiwyg.</h2>
            <EditorContainer />
        </div>
    )

}

export default App;