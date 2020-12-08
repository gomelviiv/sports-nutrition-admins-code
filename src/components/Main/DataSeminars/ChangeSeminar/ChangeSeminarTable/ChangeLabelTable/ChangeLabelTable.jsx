import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import './ChangeLabelTable.css'


export default function ChangeLabelTable(props){
   
    return (
        
        <div className="change-label-table" key={props.valuesTable.id}>
            <div>
                <input 
                    type="text"
                    value={props.valuesTable ? props.valuesTable.valueLeft : ''}
                    onChange={(e)=>{props.onChangeValuesTable(props.valuesTable.id,e.target.value,props.valuesTable.valueRight);}}
                    />
            </div>
            <div>
                <input 
                    type="text" 
                    value={props.valuesTable ? props.valuesTable.valueRight : ''}
                    onChange={(e)=>{props.onChangeValuesTable(props.valuesTable.id,props.valuesTable.valueLeft,e.target.value);}}
                />
            </div>
            <div>
                <button onClick={()=>props.delInputTable(props.valuesTable.id)}>удалить</button>
            </div>
        </div>
    )
}