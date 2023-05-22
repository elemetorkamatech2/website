
//הוספת משתמש חדש
export const AddNewUser = (user) => {
    return { type: "ADD_NEW_USER", payload: user }
}

//שינוי פרטי משתמש
export const SetDtailsUser = (newMail) => {
    return { type: "SET_DETAILS_USER", payload: newMail }
}

//להכנסת המשתמשים לסטור
export const SetUsers = (users) => {
    return { type: "SET_USERS", payload: users }
}
