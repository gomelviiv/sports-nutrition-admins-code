import React, { useEffect, useState } from "react";

import './ChangeDuscriptionNewArticle.css'
import ChangeDiscriptionNewTextContainer from './ChangeDiscriptionNewText/ChangeDiscriptionNewTextContainer.jsx'

export default function ChangeDuscriptionNewArticle(props){


    const addText = () => {
        props.setSeminarParagraph(props.allArticles.id,props.allParagraph.length===0 ? 0 : props.allParagraph[props.allParagraph.length-1].id_p +1, '')
    }
    const delPDiscription = (idArticle ,id_p) => {
        props.deleteSeminarParagraph(idArticle ,id_p)
    }

    const changePDiscription = (idArticle,id_p,p) =>{
        props.setSeminarParagraph(idArticle,id_p,p)
    }

    
    return (
        <div>
            <div className="change-discription-new-article">
                <div>
                    Введите заголовок:
                </div>
                <div>
                    <input 
                        type="text" 
                        value={props.allArticles ? props.allArticles.article : ''}
                        onChange={(e)=>props.changeArticle(props.allArticles.id,e.target.value)}
                    />
                </div>
                <div>
                    <button onClick={()=>props.delArticleDiscription(props.allArticles.id)}>удалить</button>
                </div>
            </div>
            {
                props.allParagraph ? props.allParagraph.filter(el=>el.idArticle==props.allArticles.id).map((elem,index)=>(
                    <ChangeDiscriptionNewTextContainer
                        allParagraph={elem} 
                        article={props.allArticles}
                        key={index}
                        delPDiscription={delPDiscription}
                        changePDiscription={changePDiscription}
                        setSeminarParagraph={props.setSeminarParagraph}
                    />
                )) :''
            }
        
            <button onClick={addText}>добавить  обзац с текстом к этому заголовку</button>
        </div>
    )
}