import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import './Main.css'

import DataUsersContainer from './DataUsers/DataUsersContainer.jsx'
import DataSeminarsContainer from './DataSeminars/DataSeminarsContainer.jsx'
import DataNewsContainer from './DataNews/DataNewsContainer.jsx'

export default function Main(){
    const [menu, setMenu] = useState('users')

    const changeMenu = (val) =>{
        setMenu(val)
        
    }
    return (
        <section className="section-main">
            <div>
                <div className="navigation-on-main">
                    <button onClick={()=>changeMenu('users')}>ЮЗЕРЫ</button>
                    <button onClick={()=>changeMenu('seminars')}>СЕМИНАРЫ</button>
                    <button onClick={()=>changeMenu('news')}>НОВОСТИ</button>
                </div>
                {
                    menu == 'users' ? <DataUsersContainer/> : ''
                } 
                {
                    menu == 'seminars' ? <DataSeminarsContainer/> : ''
                } 
                {
                    menu ==='news' ? <DataNewsContainer/> : ''
                }
                
                
            </div>
        </section>
    )
}