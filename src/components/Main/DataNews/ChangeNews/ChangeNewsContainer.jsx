import React, { useEffect, useState } from "react";


import ChangeNews from './ChangeNews.jsx'
import { connect } from "react-redux";

// import { setMainInformationName } from '../../../../store/main/dataSeminars/changeSeminar/changeMainInformation/actions'

import { getNewsId } from '../../../../fetch/fetchNews'

function ChangeNewsContainer(props){
    const [dataSelectedNews, setDataSelectedNews] = useState({})
    useEffect(()=>(
        props.id ? getNewsId(props.id).then(data => setDataSelectedNews(data)) : ''
    ),[props])
    return (
        <ChangeNews
            dataSelectedNews={dataSelectedNews}
            functionName={props.functionName}
        />
    )
}

const mapStateToProps = state =>{
    return {
      
    }
}
const mapDispatchToprops = {
    // setMainInformationName,
}

export default connect(mapStateToProps,mapDispatchToprops)(ChangeNewsContainer)