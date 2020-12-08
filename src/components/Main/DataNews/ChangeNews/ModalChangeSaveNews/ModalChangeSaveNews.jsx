import React, { useEffect, useState } from "react";

import './ModalChangeSaveNews.css'


import Modal from 'react-modal';
import { compose } from "redux";


export default function ModalChangeSaveNews(props){
    const sendData = ()=>{
        const formData = new FormData();
        formData.append('description', JSON.stringify({
            allArticles: props.allArticles,
            allParagraph: props.allParagraph,
            title:  props.title,
            authors: props.authors,
            specialization: props.specialization,
            littleDescription: props.littleDescription,
            authorsImages: props.authorsImages,
            littleImages: props.littleImages,
            bigImages: props.bigImages,
            id: props.id
        }));
        
        formData.append('imageAuthor', props.imgAuthor);
        formData.append('imageLittle', props.imgLittle);
        formData.append('imageBig', props.imgBig);
        props.fetchPOSTNews(formData)
          
    }

    return (
        <div className="modal-save-seminar">
            <h2>Проверьте данные:</h2>
            <h3>
                Основная информация:
            </h3>
            <div>
                <div>
                Название:
                </div>
                <div>
                {props.title ? props.title : ''}
                </div>
            </div>
            {/* <div>
                <div>
                Дата:
                </div>
                <div>
                {props.dateSeminar}
                </div>
            </div> */}
            <div>
                <div>
                Авторы:
                </div>
                <div>
                {props.authors ? props.authors : ''}
                </div>
            </div>
            
            <div>
                <div>
                Специализация:
                </div>
                <div>
                {props.specialization ? props.specialization : ''}
                </div>
            </div>
            <div>
                <div>
                Краткое описание :
                </div>
                <div>
                {props.littleDescription ? props.littleDescription : ''}
                </div>
            </div>
            <div>
                <div>
                Фото автора:
                </div>
                <div>
                {props.authorsImages ? props.authorsImages : ''}
                </div>
            </div>
            <div>
                <div>
                Маленькое фото:
                </div>
                <div>
                {props.littleImages ? props.littleImages : ''}
                </div>
            </div>
            <div>
                <div>
                Большое фото:
                </div>
                <div>
                {props.bigImages ? props.bigImages : ''}
                </div>
            </div>
            {
                props.allArticles.map( (article, index) =>(
                    
                    <div key={index} >
                        <div>
                            <label> Название загаловка :{index+1}</label> 
                        
                            {article.article}
                        </div>
                        <div>
                            {
                            props.allParagraph.filter(val=>val.idArticle==article.id).map( (paragraph, i)=>(
                                <div key={i}>
                                    {
                                        article.id === paragraph.idArticle ?
                                        <div className="artirle-paragraph">
                                            <br/>
                                            <div>
                                                Обзац: {i+1} 
                                            </div>
                                            <p>
                                                {paragraph.paragraph}
                                            </p>
                                        </div>
                                        :
                                        ""
                                    }
                                </div>
                            ))
                            }
                        </div>
                    </div>
                ))
            }
            <label className="bottom-button">
            <button onClick={()=>sendData()}>Сохранить</button>
            <button onClick={props.buttonClose}>Отмена</button>
            </label>
           
        </div>
    )
}