import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import './ChangeSeminarTable.css'
import ChangeLabelTableContainer from './ChangeLabelTable/ChangeLabelTableContainer.jsx'

export default function ChangeSeminarTable(props){
    
    const addInputTable = () => {
        props.setSeminarLabelTable(props.valuesTable.length===0 ? 0 : props.valuesTable[props.valuesTable.length-1].id +1, '', '')
    }
    const onChangeValuesTable = (id, valueLeft, valueRight) => {
        props.setSeminarLabelTable(id, valueLeft, valueRight)
    }
    const delInputTable = (id) =>{
        props.delSeminarLabelTable(id)
    }
    
    return(
        <div className="change-seminar-table">   

            {
                 props.valuesTable ? props.valuesTable.map((val,index)=>(
                    <div>
                        <ChangeLabelTableContainer 
                            valuesTable={val} 
                            key={index} 
                            // index={index} 
                            addInputTable={addInputTable}
                            delInputTable={delInputTable}
                            onChangeValuesTable={onChangeValuesTable}
                        />
                    </div>
                )) : ''
            } 
            
            <button onClick={() => addInputTable()}>
                добавить еще поля таблицы
            </button>
        </div>
   )
}

