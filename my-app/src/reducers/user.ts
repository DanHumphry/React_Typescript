
type LoginState = {
    logInLoading: boolean;
    logInDone : boolean;
    logInError : any;
  }

const initialState : LoginState  = {
    logInLoading: false, // 로그인 시도중
    logInDone: false,
    logInError: null,
}

export const loginRequestAction = (data) => ({
    type: LOG_IN_REQUEST,
    data,
  });

  const reducer = (state = initialState, action) => produce(state, (draft) => {

  })


  export default reducer;
