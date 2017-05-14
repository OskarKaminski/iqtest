const correctAnswers = {
    1: 6,
    2: 8
}

export const testCases = (state = [], action) => {
    switch (action.type) {
        case 'SET_TEST_CASES':
            return action.payload
    }
    return state;
}

export const currentTestCase = (state = 1, action) => {
    switch (action.type) {
        case 'NEXT':
            return ++state
    }
    return state;
}