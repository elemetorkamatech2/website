export const AddNewUser = (user) => {
    return { type: 'ADD_NEW_USER', payload: user }
  };
  export const SetDtailsUser = (newMail) => {
    return { type: 'SET_DETAILS_USER', payload: newMail }
  };
  export const SetUsers = (users) => {
    return { type: 'SET_USERS', payload: users }
  }       ;
  