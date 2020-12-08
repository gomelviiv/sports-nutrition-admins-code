import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import ChangeDiscriptionArticleAndText from './ChangeDiscriptionArticleAndText.jsx'
import { deleteSeminarArticle,
        deleteSeminarParagraphAll,
        deleteSeminarParagraph,
        setSeminarArticle,
        setSeminarParagraph,
        clearArticles,
        clearParagraph,
    } from '../../../../../store/main/dataSeminars/changeSeminar/changeDiscriptionArticleAndText/сhangeDuscriptionNewArticle/actions'


function ChangeDiscriptionArticleAndTextContainer(props){
    useEffect(()=>{
        // console.log(props)
        props.clearArticles()
        // console.log(props)
        if(props.defaultAllArticles ? props.defaultAllArticles.lenght != 0 : ''){
            props.defaultAllArticles ? props.defaultAllArticles.map((val,index)=>{
                if(props.allArticles.find(elem => elem.id==val.id)){
                } else {
                    props.setSeminarArticle(val.id, val.article)
                } 
                
            }) : ''
        }
    },[props.defaultAllArticles])


    useEffect(()=>{
        props.clearParagraph()
        if(props.defaultAllParagraph ? props.defaultAllParagraph.lenght != 0 : ''){
            props.defaultAllParagraph ? props.defaultAllParagraph.map((val,index)=>{
                if(props.allParagraph.find(elem => elem.id==val.id)){
                } else {
                    props.setSeminarParagraph(val.idArticle, val.id_p, val.paragraph)
                } 
                
            }) : ''
        }
    },[props.defaultAllParagraph])


    return (
        <ChangeDiscriptionArticleAndText
            allArticles={props.allArticles}
            allParagraph={props.allParagraph}
            setSeminarArticle={props.setSeminarArticle}
            setSeminarParagraph={props.setSeminarParagraph}
            deleteSeminarArticle={props.deleteSeminarArticle}
            // deleteSeminarParagraphAll={props.deleteSeminarParagraphAll}
            deleteSeminarParagraph={props.deleteSeminarParagraph}
        />
    )
}

const mapStateToProps = state =>{
    return {
        allArticles: state.changeSeminarArticleAndText.allArticles,
        allParagraph: state.changeSeminarArticleAndText.allParagraph
    }
}

const mapDispatchToProps = {
    setSeminarArticle,
    setSeminarParagraph,
    deleteSeminarArticle,
    // deleteSeminarParagraphAll,
    deleteSeminarParagraph,
    clearParagraph,
    clearArticles,
}


export default connect(mapStateToProps,mapDispatchToProps)(ChangeDiscriptionArticleAndTextContainer)