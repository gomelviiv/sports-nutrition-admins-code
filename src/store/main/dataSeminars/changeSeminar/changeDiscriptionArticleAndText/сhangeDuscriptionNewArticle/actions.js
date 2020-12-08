export const CHANGE_SEMINAR_ARTICLE = 'CHANGE_SEMINAR_ARTICLE' 
export const CHANGE_SEMINAR_PARAGRAPH = 'CHANGE_SEMINAR_PARAGRAPH' 
export const DELETE_SEMINAR_ARTICLE = 'DELETE_SEMINAR_ARTICLE'
export const DELETE_SEMINAR_PARAGRAPH_ALL = 'DELETE_SEMINAR_PARAGRAPH_ALL'
export const DELETE_SEMINAR_PARAGRAPH = 'DELETE_SEMINAR_PARAGRAPH'
export const CLEAR_ARTICLES = 'CLEAR_ARTICLES'
export const CLEAR_PARAGRAPH = 'CLEAR_PARAGRAPH'


export const setSeminarArticle = (id,article) =>({
    type: CHANGE_SEMINAR_ARTICLE,
    payload: {
        id,
        article,        
    }
})

export const setSeminarParagraph = (idArticle,id_p,paragraph) =>({
    type: CHANGE_SEMINAR_PARAGRAPH,
    payload: {
        idArticle,
        id_p,
        paragraph
    }
})

export const deleteSeminarArticle = (id) =>({
    type: DELETE_SEMINAR_ARTICLE,
    payload: {
        id,
    }
})

export const deleteSeminarParagraph = (idArticle, id_p) =>({
    type: DELETE_SEMINAR_PARAGRAPH,
    payload: {
        idArticle,
        id_p,
    }
})

export const clearArticles = () =>({
    type: CLEAR_ARTICLES,
})
export const clearParagraph = () =>({
    type: CLEAR_PARAGRAPH,
})

