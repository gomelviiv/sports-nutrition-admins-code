import React, { useEffect, useState } from "react";


import ModalChangeSaveNews from './ModalChangeSaveNews.jsx'
import { connect } from "react-redux";
import { postNews } from '../../../../../fetch/fetchNews'



function ModalChangeSaveNewsContainer(props){


    const fetchPOSTNews = (news) =>{
        // postNews(news)
        postNews(news).then(data => location.reload())
    }


    return (
     <ModalChangeSaveNews
        id={props.id}

        title = { props.title}
        authors = { props.authors}
        specialization = { props.specialization}
        littleDescription = { props.littleDescription}
        authorsImages = { props.authorsImages}
        littleImages = { props.littleImages}
        bigImages = { props.bigImages}
        allArticles={props.allArticles}
        allParagraph={props.allParagraph}
        fetchPOSTNews={fetchPOSTNews}
        buttonClose={props.buttonClose}

        imgAuthor={props.imgAuthor}
        imgLittle={props.imgLittle}
        imgBig={props.imgBig}
     />
    )
}

const mapStateToProps = state =>{
    return {
        title:  state.changeMainInformationNews.title,
        authors: state.changeMainInformationNews.authors,
        specialization: state.changeMainInformationNews.specialization,
        littleDescription: state.changeMainInformationNews.littleDescription,
        authorsImages: state.changeMainInformationNews.authorsImages,
        littleImages: state.changeMainInformationNews.littleImages,
        bigImages: state.changeMainInformationNews.bigImages,
        allArticles: state.changeSeminarArticleAndText.allArticles,
        allParagraph: state.changeSeminarArticleAndText.allParagraph,
    }
}
const mapDispatchToprops = {

}

export default connect(mapStateToProps,mapDispatchToprops)(ModalChangeSaveNewsContainer)