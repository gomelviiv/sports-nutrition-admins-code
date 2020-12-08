import React, { useEffect, useState } from "react";

import './ChangeDiscriptionNewText.css'


export default function ChangeDiscriptionNewText(props){
    return (
            <div className="change-discription-new-text">
                <div>
                    Обзац
                </div>
                <div>
                    <textarea 
                        value={props.allParagraph ? props.allParagraph.paragraph : ''}
                        onChange={(e)=>props.changePDiscription(props.article.id,props.allParagraph.id_p,e.target.value)}>
                    </textarea>
                </div>
                <div>
                    <button onClick={()=>props.delPDiscription(props.article.id,props.allParagraph.id_p)}>удалить</button>
                </div>
            </div>
    )
}