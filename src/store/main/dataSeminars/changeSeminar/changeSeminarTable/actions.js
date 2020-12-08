export const CHANGE_SEMINAR_LABEL_TABLE = 'CHANGE_SEMINAR_LABEL_TABLE' 
export const DEL_SEMINAR_LABEL_TABLE = 'DEL_SEMINAR_LABEL_TABLE' 
export const CLEAR_TABLE = 'CLEAR_TABLE' 


export const setSeminarLabelTable = (id,valueLeft,valueRight) =>({
    type: CHANGE_SEMINAR_LABEL_TABLE,
    payload: {
        id,
        valueLeft,
        valueRight,
    }
})

export const delSeminarLabelTable  = (id) => ({
    type: DEL_SEMINAR_LABEL_TABLE,
    payload: {
        id,
    }
})

export const clearLabelTable  = () => ({
    type: CLEAR_TABLE,
})