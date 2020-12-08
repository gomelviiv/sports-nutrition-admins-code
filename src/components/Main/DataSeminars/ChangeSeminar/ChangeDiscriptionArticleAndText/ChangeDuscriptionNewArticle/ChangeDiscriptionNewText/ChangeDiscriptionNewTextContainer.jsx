import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import ChangeDiscriptionNewText from './ChangeDiscriptionNewText.jsx'

function ChangeDiscriptionNewTextContainer(props){
    return (
        <ChangeDiscriptionNewText
            indexArticle={props.index} 
            index={props.index} 
            delPDiscription={props.delPDiscription}
            changePDiscription={props.changePDiscription}
            setSeminarParagraph={props.setSeminarParagraph}
            allParagraph={props.allParagraph}
            article={props.article}
        />
    )
}

const mapStateToProps = state =>{
    return {

    }
}

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(ChangeDiscriptionNewTextContainer)