export const actionType = {
  LOGIN_REQUEST: "LOGIN_REQUEST",
  LOGIN_SUCCESS: "LOGIN-SUCCESS",
  LOGIN_ERROR: "LOGIN-ERROR",
  LOGOUT: "LOGOUT",
};

export const initialstate = {
  user: null,
  token: "",
  loding: true,
  error: null,
  Logout: false,
};

export function reducer(state, action) {
  switch (action.type) {
    case actionType.LOGIN_REQUEST:
      return {
        ...state,
        user: null,
        token: null,
        loding: true,
        error: null,
        Logout: false,
      };
    case actionType.LOGIN_SUCCESS:
      debugger
      const { user, token, Logout,loding,permission } = action.payload;
      return {
        ...state,
        user: user,
        token: token,
        loding: loding,
        permission: permission,
        error: null,
        Logout: Logout,
      };
    case actionType.LOGIN_ERROR:
      return {
        ...state,
        user: null,
        token: null,
        loding: false,
        error: action.type.payload,
      };
    case actionType.LOGOUT:
      return {
        ...state,
        user: null,
        token: null,
        loding: false,
        error: null,
      };

    default:
      throw Error("action type not supurt ");
  }
}
