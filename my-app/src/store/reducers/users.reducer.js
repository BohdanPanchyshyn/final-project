import { actionTypes } from "../actionsTypes";



const initialState = {
   users: null,
   loading: false,
   error: "",
   addUserLoading: false,
};

export default function usersReducer(state = initialState, action) {
   switch (action.type) {
      case actionTypes.GET_USERS:
         return {
            ...state,
            loading: true,
            error: "",
         }

      case actionTypes.GET_USERS_SUCCESS:
         return {
            ...state,
            loading: false,
            users: action.payload,
         }

      case actionTypes.GET_USERS_FAILED:
         return {
            ...state,
            loading: false,
            error: action.payload,
         }

      case actionTypes.CREATE_USER_REQUEST:
         return {
            ...state,
            addUserLoading: true,
            error: "",
         }

      case actionTypes.CREATE_USER_SUCCESS:
         return {
            ...state,
            addUserLoading: false,
         }

      case actionTypes.CREATE_USER_FAILED:
         return {
            ...state,
            addUserLoading: false,
            error: action.payload,
         }

      default:
         return state;
   }
}