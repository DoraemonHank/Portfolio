import React,{useState,Suspense } from 'react'
import {Switch,Route} from "react-router-dom";
import NavComponent from "./components/nav-components";
import HomeComponent from './components/home-components';

const App = () =>{


    return (
        <div>
            <Suspense fallback="loading">
                <NavComponent />
            </Suspense>

            <Switch>
                <Route path='/' exact>
                    <HomeComponent />
                </Route>
            </Switch>
           
        </div>
    )

}

export default App;