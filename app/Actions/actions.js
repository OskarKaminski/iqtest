export const setTestCases = (payload) => ({
  type: 'SET_TEST_CASES',
  payload
})
export const restartTimer = () => ({
  type: 'RESTART_TIMER'
})
export const previousTestCase = (limit) => ({
    type: 'PREVIOUS',
    limit
})
export const nextTestCase = (limit) => ({
    type: 'NEXT',
    limit
})
export const setAnswer = (answer, number) => ({
    type: 'SET_ANSWER',
    answer,
    number
})
export const setHighScores = (highScores) => ({
    type: 'SET_HIGH_SCORES',
    payload: highScores
})
export const fetchHighScores = () => ({
    type: 'FETCH_HIGH_SCORES'
})
export const decrementTime = () => ({
  type: 'DECREMENT_TIME'
})
