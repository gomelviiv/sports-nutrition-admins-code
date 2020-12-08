import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import './ChangeSeminarTable.css'
import ChangeSeminarTable from './ChangeSeminarTable.jsx'
import { connect } from "react-redux";

import { addDefaultSeminarLabelTable,
         setSeminarLabelTable,
         delSeminarLabelTable,
         clearLabelTable,
       } from '../../../../../store/main/dataSeminars/changeSeminar/changeSeminarTable/actions'

function ChangeSeminarTableContainer(props){
    useEffect(()=>{
        props.clearLabelTable()
        if(props.defaultValuesTable ? props.defaultValuesTable.lenght != 0 : ''){
            props.defaultValuesTable ? props.defaultValuesTable.map((val,index)=>{
                if(props.valuesTable.find(elem => elem.id==val.id)){
                } else {
                    props.setSeminarLabelTable(val.id, val.valueLeft, val.valueRight)
                } 
            }) : ''
        }
    },[props.defaultValuesTable])

    return(
        <ChangeSeminarTable
            valuesTable={props.valuesTable}
            setSeminarLabelTable={props.setSeminarLabelTable}
            delSeminarLabelTable={props.delSeminarLabelTable}
        />
   )
}

const mapStateToProps = state => {
    return {
        valuesTable: state.changeLabelTable.valuesTable,
    }
}

const mapDispatchToprops =  {
    delSeminarLabelTable,
    setSeminarLabelTable,
    clearLabelTable,

}

export default connect(mapStateToProps,mapDispatchToprops)(ChangeSeminarTableContainer)