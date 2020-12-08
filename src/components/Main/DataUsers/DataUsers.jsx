import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import './DataUsers.css'

import DataUsersValueContainer from './DataUsersValue/DataUsersValueContainer.jsx'

export default function DataUsers(props){
    return (
        <div className="data-users">
                <ul className="responsive-table">
                    <li className="table-header">
                        <div className="col col-1">Номер #</div>
                        <div className="col col-2">Логин</div>
                        <div className="col col-3">Роль</div>
                        <div className="col col-4">Изменить</div>
                    </li>
                    {
                        props.dataUsers ?
                            props.dataUsers.map(value=>(
                                <DataUsersValueContainer
                                    dataUsers={value}
                                />
                            ))
                        : ''
                    }
                   
                    
                </ul>
        </div>
    )
}