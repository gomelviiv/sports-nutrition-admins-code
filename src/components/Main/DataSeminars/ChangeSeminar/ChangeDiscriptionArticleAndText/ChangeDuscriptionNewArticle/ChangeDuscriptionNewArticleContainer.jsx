import React, { useEffect, useState } from "react";
import { connect } from 'react-redux'


import ChangeDuscriptionNewArticle from './ChangeDuscriptionNewArticle.jsx'

function ChangeDuscriptionNewArticleContainer(props){
    return (
        <ChangeDuscriptionNewArticle
            setSeminarArticle={props.setSeminarArticle}
            setSeminarParagraph={props.setSeminarParagraph}
            changeArticle={props.changeArticle}
            allArticles={props.allArticles}
            allParagraph={props.allParagraph}
            delArticleDiscription={props.delArticleDiscription}
            deleteSeminarArticle={props.deleteSeminarArticle}
            deleteSeminarParagraph={props.deleteSeminarParagraph}
        />
    )
}

const mapStateToProps = state =>{
    return {
    }
}

const mapDispatchToProps = {
}

export default connect(mapStateToProps,mapDispatchToProps)(ChangeDuscriptionNewArticleContainer)