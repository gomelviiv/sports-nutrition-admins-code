import {
    CHANGE_SEMINAR_ARTICLE,
    CHANGE_SEMINAR_PARAGRAPH,
    DELETE_SEMINAR_ARTICLE,
    DELETE_SEMINAR_PARAGRAPH,
    CLEAR_ARTICLES,
    CLEAR_PARAGRAPH,
} from './actions'

const defaultState = {
    allArticles: [],
    allParagraph: []
}

export const changeSeminarArticleAndTextReducer = (state = defaultState, action) => {
    switch(action.type){
        case CHANGE_SEMINAR_ARTICLE:            
            let foundIndexArticle = state.allArticles.findIndex( item => item.id == action.payload.id)
            if(foundIndexArticle !== -1){
                state.allArticles[foundIndexArticle] = action.payload
                return {
                    ...state,
                    allArticles: [...state.allArticles]
                }
            } else{ 
                return {
                    ...state,
                    allArticles: [...state.allArticles, action.payload]
                }
            }
        case CHANGE_SEMINAR_PARAGRAPH:
            let checkIdArticle = state.allParagraph.findIndex( item => item.idArticle == action.payload.idArticle && item.id_p == action.payload.id_p)
            if(checkIdArticle != -1){
                state.allParagraph[checkIdArticle] = action.payload
                return {
                    ...state,
                    allParagraph: [...state.allParagraph]
                }
            } else {
                return {
                    ...state,
                    allParagraph: [...state.allParagraph, action.payload]
                }
            }
        case DELETE_SEMINAR_ARTICLE:
            let indexArtecle = state.allArticles.findIndex( item => item.id == action.payload.id)
            let indexParagraphDel = state.allParagraph.findIndex( item => item.idArticle == action.payload.id)
            if(checkIdArticle != -1){
                state.allArticles.splice(indexArtecle,1)
                if(indexParagraphDel !==-1){
                    state.allParagraph = state.allParagraph.filter(el=>el.idArticle !== action.payload.id)
                }
                return {
                    ...state,
                    allArticles: [...state.allArticles],
                    allParagraph: [...state.allParagraph]
                }
            }
        
        case DELETE_SEMINAR_PARAGRAPH:
            let indexParagraph = state.allParagraph.findIndex( item => item.idArticle == action.payload.idArticle && item.id_p == action.payload.id_p)
            if(checkIdArticle != -1){
                state.allParagraph.splice(indexParagraph,1)
                return {
                    ...state,
                    allParagraph: [...state.allParagraph]
                }
            }
        case CLEAR_ARTICLES:
            return {
                ...state,
                allArticles: [],
            }
        case CLEAR_PARAGRAPH:
            return {
                ...state,
                allParagraph: []
            }
   }
    return state 
}