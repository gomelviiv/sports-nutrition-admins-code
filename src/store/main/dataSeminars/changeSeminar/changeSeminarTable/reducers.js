import {
    CHANGE_SEMINAR_LABEL_TABLE,
    DEL_SEMINAR_LABEL_TABLE,
    CLEAR_TABLE
} from './actions'

const defaultState = {
    valuesTable: []
}

export const changeLabelTableReducer = (state = defaultState, action) => {
    switch(action.type){
        case CHANGE_SEMINAR_LABEL_TABLE:
            let changeFoundIndex = state.valuesTable.findIndex( item => item.id == action.payload.id)
            if(changeFoundIndex !== -1){
                state.valuesTable[changeFoundIndex] = action.payload
                return {
                    ...state,
                    valuesTable: [...state.valuesTable]
                }
            } else {
                return {
                    ...state,
                    valuesTable: [...state.valuesTable, action.payload]
                }
            }
        case DEL_SEMINAR_LABEL_TABLE:
            let delFoundIndex = state.valuesTable.findIndex( item => item.id == action.payload.id)
            if(delFoundIndex !== -1){
                state.valuesTable.splice(delFoundIndex,1)
                return {
                    ...state,
                    valuesTable: [...state.valuesTable]
                }
            }
        case CLEAR_TABLE:
            return {
                ...state,
                valuesTable: []
            }
        }
    return state 
}