import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import './ModalAddNews.css'
import ChangeNewsContainer from '../ChangeNews/ChangeNewsContainer.jsx'
export default function ModalAddNews(props){
    return (
       <ChangeNewsContainer functionName={'Создание Новости'} className="add-seminar"/>
    )
}