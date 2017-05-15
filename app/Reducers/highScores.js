export const highScores = (state = [], action) => {
    switch (action.type) {
        case 'SET_HIGH_SCORES':
            return action.payload
    }
    return state;
}