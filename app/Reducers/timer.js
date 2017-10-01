export const timer = (state = 0, action) => {
  switch (action.type) {
    case 'RESTART_TIMER':
      return 90
  }
  return state;
}