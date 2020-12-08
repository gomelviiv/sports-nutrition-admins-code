import React, { useEffect, useState } from "react";


import ModalChangeSaveSeminar from './ModalChangeSaveSeminar.jsx'
import { connect } from "react-redux";
import { postSeminar } from '../../../../../fetch/fetchSeminar'



function ModalChangeSaveSeminarContainer(props){


    const fetchPOSTSeminar = (seminar) =>{
        postSeminar(seminar).then(data => location.reload())
    }


    return (
     <ModalChangeSaveSeminar
        id={props.id}
        name={props.name}
        dateSeminar={props.dateSeminar}
        authors={props.authors}
        format={props.format}
        countPlace={props.countPlace}
        img={props.img}
        valuesTable={props.valuesTable}
        allArticles={props.allArticles}
        allParagraph={props.allParagraph}
        fetchPOSTSeminar={fetchPOSTSeminar}
        buttonClose={props.buttonClose}
        image={props.image}
     />
    )
}

const mapStateToProps = state =>{
    return {
        name: state.changeMainInformation.name,
        dateSeminar: state.changeMainInformation.dateSeminar,
        authors: state.changeMainInformation.authors,
        format: state.changeMainInformation.format,
        countPlace: state.changeMainInformation.countPlace,
        img: state.changeMainInformation.img,
        valuesTable: state.changeLabelTable.valuesTable,
        allArticles: state.changeSeminarArticleAndText.allArticles,
        allParagraph: state.changeSeminarArticleAndText.allParagraph,
    }
}
const mapDispatchToprops = {

}

export default connect(mapStateToProps,mapDispatchToprops)(ModalChangeSaveSeminarContainer)