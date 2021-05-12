export default (state, action) => {
  switch (action.type) {
    case 'SET_USER':
      console.log(action.payload)
      return {
        ...state,
        user: action.payload,
      }
  }
}
