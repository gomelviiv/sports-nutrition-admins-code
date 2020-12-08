
import React, { useEffect, useState } from "react";
import { connect } from 'react-redux'

import ChangeLabelTable from './ChangeLabelTable.jsx'

function ChangeLabelTableContainer(props){
    return(
       <ChangeLabelTable
            index = {props.index}
            delInputTable= {props.delInputTable}
            valuesTable={props.valuesTable}
            onChangeValuesTable={props.onChangeValuesTable}
       />
   )
}

const mapStateToProps = state => {
    return {
       
    }
}

const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(ChangeLabelTableContainer)