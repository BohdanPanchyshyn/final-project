import { actionTypes } from "../actionsTypes";



const initialState = {
   news: null,
   loading: false,
   error: "",
   addNewsLoading: false,
   chosenNews: null,
};


export default function newsReducer(state = initialState, action) {
   switch (action.type) {
      case actionTypes.GET_NEWS:
         return {
            ...state,
            loading: true,
            error: "",
         }

      case actionTypes.GET_NEWS_SUCCESS:
         return {
            ...state,
            loading: false,
            news: action.payload,
         }

      case actionTypes.GET_NEWS_FAILED:
         return {
            ...state,
            loading: false,
            error: action.payload,
         }

      case actionTypes.GET_ONE_NEWS:
         return {
            ...state,
            loading: true,
            error: "",
         }

      case actionTypes.GET_ONE_NEWS_SUCCESS:
         return {
            ...state,
            loading: false,
            chosenNews: action.payload,
         }

      case actionTypes.GET_ONE_NEWS_FAILED:
         return {
            ...state,
            loading: false,
            error: action.payload,
         }

      case actionTypes.EDIT_ONE_NEWS:
         return {
            ...state,
            loading: true,
            error: "",
         }

      case actionTypes.EDIT_ONE_NEWS_SUCCESS:
         return {
            ...state,
            loading: false,
         }

      case actionTypes.EDIT_ONE_NEWS_FAILED:
         return {
            ...state,
            loading: false,
            error: action.payload,
         }

      case actionTypes.CREATE_NEWS_REQUEST:
         return {
            ...state,
            addNewsLoading: true,
            error: "",
         }

      case actionTypes.CREATE_NEWS_SUCCESS:
         return {
            ...state,
            addNewsLoading: false,
         }

      case actionTypes.CREATE_NEWS_FAILED:
         return {
            ...state,
            addNewsLoading: false,
            error: action.payload,
         }

      default:
         return state;
   }
}