import initialState from './../initial-state'

const CountReducer = (state, action) => {
    const newState = Object.assign({}, state)
    switch(action.type){
        case 'COUNT_INC':
            newState.currentValue += 1
            return newState
        case 'COUNT_DEC':
            newState.currentValue -= 1
            return newState
        default:
            return state || initialState.count
    }
}

export default CountReducer
