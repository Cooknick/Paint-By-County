const actionType = {
    hoverCounty: 'HOVER_COUNTY',
    lockCounty: 'LOCK_COUNTY',
    selectData: 'SELECT_DATA',
    setGuide: 'SET_GUIDE'
}


export const hoverCounty = county => ({
    type: actionType.hoverCounty,
    payload: county
})

export const lockCounty = county => ({
    type: actionType.lockCounty,
    payload: county
})

export const selectData = data => ({
    type: actionType.selectData,
    payload: data
})

export const setGuide = guide => ({
    type: actionType.setGuide,
    payload: guide
})

const initalState = {
    hoveredCounty: undefined,
    lockedCounty: undefined,
    selectedData: ['Population'],
    guide: undefined,
}


export const rootReducer = (state = initalState, action) => {

    switch (action.type) {
        case actionType.hoverCounty:
            return { ...state, hoveredCounty: action.payload };
        case actionType.lockCounty:
            return { ...state, lockedCounty: action.payload };
        case actionType.selectData:
            return { ...state, selectedData: action.payload };
        case actionType.setGuide:
            return { ...state, guide: action.payload };
        default:
            return state;
    }
}