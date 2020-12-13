let UserName = null

export const ProfileReducer=(state = UserName, action)=> {
  switch (action.type) {
    case 'UPDATE_NAME': {
      state = action.value;
      return  state;
    }
    default:
      return state
  }
}
