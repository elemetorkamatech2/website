const initialState = {
    userName: "John Doe",
  };
  
  const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case "UPDATE_USERNAME":
        return {
          ...state,
          userName: action.payload,
        };
      default:
        return state;
    }
  };
  export const mockUserState={
    userName:"Jana Smith"
  };
  export const mockUserReducer=(state=mockUserState, action)=>{
    switch(action.type){
        case "UPDATE_USERNAME":
            return{
                ...state,
                userName: action.payload,
            };
            default:
                return state;

    }
  };