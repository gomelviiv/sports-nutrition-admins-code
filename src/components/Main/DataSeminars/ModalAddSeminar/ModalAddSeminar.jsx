import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import './ModalAddSeminar.css'
import ChangeSeminarContainer from '../ChangeSeminar/ChangeSeminarContainer.jsx'
export default function ModalAddSeminar(props){
    return (
       <ChangeSeminarContainer functionName={'Создание семинара'} className="add-seminar"/>
    )
}