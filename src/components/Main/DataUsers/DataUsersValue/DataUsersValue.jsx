import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import './DataUsersValue.css'



export default function DataUsersValue(props){
    return (
            <li className="table-row">
                <div className="col col-1" data-label="Job Id">1</div>
                <div className="col col-2" data-label="Customer Name">{props.dataUsers.login}</div>
                <div className="col col-3" data-label="Amount">{props.dataUsers.status}</div>
                <div className="col col-4" data-label="Payment Status">
                    <button onClick={()=>props.deleteUser(props.dataUsers._id)}>удалить</button>
                    <button onClick={()=>props.changeUser(props.dataUsers._id,2)}>поднять</button>
                    <button onClick={()=>props.changeUser(props.dataUsers._id,3)}>опустить</button>
                </div>
            </li>
    )
}