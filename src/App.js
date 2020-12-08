import React from "react";
import {HashRouter, Route, } from 'react-router-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './store/reducers'

import Entry from "./components/Entry/Entry.jsx"
import Main from "./components/Main/Main.jsx";


import "./App.css"

const store  = createStore(rootReducer)


export default function App() {
        return (
            <Provider store={store}>
                <HashRouter>
                    <Route exact path='/' component={Entry}/>
                    <Route exact path='/target' component={Main}/>
                </HashRouter>
            </Provider>
        );
}
