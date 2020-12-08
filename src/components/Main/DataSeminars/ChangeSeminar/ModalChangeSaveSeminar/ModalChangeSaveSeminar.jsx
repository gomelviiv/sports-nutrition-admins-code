import React, { useEffect, useState } from "react";

import './ModalChangeSaveSeminar.css'


import Modal from 'react-modal';
import { compose } from "redux";


export default function ModalChangeSaveSeminar(props){
    const sendData = ()=>{
        const formData = new FormData();
        formData.append('description', JSON.stringify({
            allArticles: props.allArticles,
            allParagraph: props.allParagraph,
            authors: props.authors,
            countPlace: props.countPlace,
            dateSeminar:props.dateSeminar,
            format: props.format,
            name: props.name,
            img: props.img,
            keyTable: props.keyTable,
            valuesTable: Array.from(props.valuesTable),
            id: props.id
        }));
        
        formData.append('image', props.image);
        props.fetchPOSTSeminar(formData)
            
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
                {props.name}
                </div>
            </div>
            <div>
                <div>
                Дата:
                </div>
                <div>
                {props.dateSeminar}
                </div>
            </div>
            <div>
                <div>
                Авторы:
                </div>
                <div>
                {props.authors}
                </div>
            </div>
            <div>
                <div>
                Формат:
                </div>
                <div>
                {props.format}
                </div>
            </div>
            <div>
                <div>
                Количество мест:
                </div>
                <div>
                {props.countPlace}
                </div>
            </div>
            <div>
                <div>
                Фото:
                </div>
                <div>
                {props.img ? props.img : ''}
                </div>
            </div>
            <h3>
                Информация для таблицы:
            </h3>
            <div className="table-save-change">
                {
                    props.valuesTable.map((val,index)=>(
                        <div>
                            <div>
                                {val.valueLeft}:
                            </div>
                            <div>
                                {val.valueRight}
                            </div>
                        </div>
                    ))
                }
            </div>
            <h3>
                Информацияо о семинаре:
            </h3>
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
            <button 
                
                onClick={()=>sendData()
            }>Сохранить</button>
            <button onClick={props.buttonClose}>Отмена</button>
            </label>
           
        </div>
    )
}