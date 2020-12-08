import React, { useEffect, useState } from "react";

import  { Redirect } from 'react-router'
import { createBrowserHistory } from "history";
import './Entry.css'

import { signInFetch, signUpFetch } from "../../fetch/fetchUser"


export default function Entry(){
    const [regStatus, setRegStatus] = useState(false)
    const [loginStatus, setLoginStatus] = useState(true)
    const [userLogin, setUserLogin] = useState('')
    const [userPassword, setUserPassword] = useState('')
    const [userPasswordAgain, setUserPasswordAgain] = useState('')
    const [counter, setCounter] = useState(0)
    const [statusRedirect, setStatusRedirect] = useState(false)


    const entry = () => {
        if(counter === 0){
            setCounter((preState) => counter + 1)
            setRegStatus((preState) => !preState)
            setLoginStatus((preState) => !preState)
        } else if(counter === 1 ){
            if((userPassword === userPasswordAgain) && (userPassword !== '')) {
                signUpFetch({login: userLogin, password: userPassword, status: 3}).then(
                    data => {
                        setCounter(0)
                        setRegStatus((preState) => !preState)
                        setLoginStatus((preState) => !preState)
                        alert("Регистрация прошла успшно!")
                    }
                ).catch(response => alert("Юзер с таким логином уже зарегестрирован"))
            } else {
                alert("Пароли не совпадают!")
            }
        } 
    }

    const sendData = () =>{
        console.log(userLogin,userPassword)
        signInFetch({login: userLogin, password: userPassword}).then(data =>{
            if(data.status){
                localStorage.setItem('token', data.token)
                setStatusRedirect(true)
                alert("welcome")
                window.location.replace('http://localhost:8080/#/target')
            } else {
                alert("ne welcome")
            }
        })
    }
    useEffect(()=>{
        if(statusRedirect){
            // return  <Redirect to={{pathname: 'target'}} push/> 
        }
        
    },[statusRedirect])
    return (
        <section className="section-entry">
            <div className="form">
                <input type="text" onChange={(event) => setUserLogin(prevState => event.target.value)} placeholder="Введите логин:"/>
                <input type="password" onChange={(event) => setUserPassword(prevState => event.target.value)} placeholder="Введите пароль:"/>
                {
                    regStatus ? 
                        <input type="password" onChange={(event) => setUserPasswordAgain(prevState => event.target.value)} placeholder="Подтвердите пароль:"/>
                        :
                        ""
                }
                <div className="button-entry">
                    {
                        loginStatus ? <button onClick={sendData}>Вход</button> : ""
                    }
                    <button onClick={entry}>Регистрация</button>
                </div>
            </div>
        </section>
    )
}