function action(state=null, action) {
  switch (action.type) {
    case 'PLUS':
      return {number: state.number + 1};
    case 'MINUS':
      return {number: state.number - 1};
    default:
      return {number: 0};
  }
}

export default action;