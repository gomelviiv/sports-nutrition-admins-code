import React, { useEffect, useState } from "react";


import ChangeSeminar from './ChangeSeminar.jsx'
import { connect } from "react-redux";

import { setMainInformationName } from '../../../../store/main/dataSeminars/changeSeminar/changeMainInformation/actions'

import { getSeminarsId } from '../../../../fetch/fetchSeminar'

function ChangeSeminarContainer(props){
    const [dataSelectedSeminar, setDataSelectedSeminar] = useState({})
    useEffect(()=>(
        props.id ? getSeminarsId(props.id).then(data => setDataSelectedSeminar(data)) : ''
    ),[props])
    return (
        <ChangeSeminar
            dataSelectedSeminar={dataSelectedSeminar}
            functionName={props.functionName}
        />
    )
}

const mapStateToProps = state =>{
    return {
      
    }
}
const mapDispatchToprops = {
    setMainInformationName,
}

export default connect(mapStateToProps,mapDispatchToprops)(ChangeSeminarContainer)