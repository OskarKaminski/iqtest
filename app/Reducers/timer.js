export const timer = (state = 0, action) => {
  switch (action.type) {
    case 'RESTART_TIMER':
      return 90 
    case 'DECREMENT_TIME':
      return  state - 1 
  }
  return state;
}