const correctAnswers = {
    1: 6,
    2: 8
}

export const testCases = (state = [], action) => {
    switch (action.type) {
        case 'SET_TEST_CASES':
            return action.payload
        case 'SET_ANSWER':
            return state.map((testCase) => {
                if(testCase.number === action.number){
                    return {
                        ...testCase,
                        answer: action.answer
                    }
                }
                return testCase;
            })
    }
    return state;
}

export const currentTestCase = (state = 1, action) => {
    switch (action.type) {
        case 'PREVIOUS':
            return state !== action.limit ? state - 1 : state
        case 'NEXT':
            return state !== action.limit ? state + 1 : state
    }
    return state;
}