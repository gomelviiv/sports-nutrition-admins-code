import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import {getSeminars, delSeminar} from '../../../fetch/fetchSeminar'
import DataSeminars from './DataSeminars.jsx' 

function DataSeminarsContainer(props){
    const [allSeminars, setAllSeminars] = useState([])

    const fetchGETSeminars = () =>{
        getSeminars().then( data=>setAllSeminars(data))
    }

    const fetchDELSeminar = (id) => {
        delSeminar(id).then(data => location.reload())
    }

    useEffect(()=>(
        fetchGETSeminars()
    ),[])
    return (
        <DataSeminars
            allSeminars={allSeminars}
            fetchDELSeminar={fetchDELSeminar}
        />
    )
}

const mapStateToProps = state =>{
    return {
    }
}

const mapDispatchToProps  = {

}


export default connect(mapStateToProps, mapDispatchToProps)(DataSeminarsContainer)