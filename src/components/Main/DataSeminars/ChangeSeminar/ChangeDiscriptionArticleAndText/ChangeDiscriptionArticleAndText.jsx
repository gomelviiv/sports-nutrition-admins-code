import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import './ChangeDiscriptionArticleAndText.css'
import ChangeDuscriptionNewArticleContainer from './ChangeDuscriptionNewArticle/ChangeDuscriptionNewArticleContainer.jsx'

export default function ChangeDiscriptionArtiecleAndText(props){
    
    const addArticle = () => {
        props.setSeminarArticle(props.allArticles.length===0 ? 0 : props.allArticles[props.allArticles.length-1].id +1, '')
    }

    const changeArticle =(id,article) => {
        props.setSeminarArticle(id,article)
    }

    const delArticleDiscription = (id) => {
        props.deleteSeminarArticle(id)

    }
    
    return (
        <div className="change-discription-artiecle-and-text">
                {
                    props.allArticles ? props.allArticles.map((val,index)=>(
                        <ChangeDuscriptionNewArticleContainer
                            allArticles={val}
                            allParagraph={props.allParagraph}
                            changeArticle={changeArticle}
                            setSeminarArticle={props.setSeminarArticle}
                            setSeminarParagraph={props.setSeminarParagraph}
                            key={index} 
                            index={index}
                            deleteSeminarParagraph={props.deleteSeminarParagraph} 
                            delArticleDiscription={delArticleDiscription}
                        />
                    )) : ''
                }
                <button onClick={addArticle}>добавить новый заголовок</button>
               
            </div>
    )
}