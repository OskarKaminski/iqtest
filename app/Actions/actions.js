export const setTestCases = (payload) => ({
    type: 'SET_TEST_CASES',
    payload
})

export const nextTestCase = (answer, number) => ({
    type: 'NEXT'
})

export const setAnswer = (answer, number) => ({
    type: 'SET_ANSWER',
    answer,
    number
})