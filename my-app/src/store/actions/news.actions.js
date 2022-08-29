import { actionTypes } from "../actionsTypes";
import { newsService } from "../../service/news.service";



const getNews = () => {
   const request = () => ({ type: actionTypes.GET_NEWS })
   const success = (data) => ({ type: actionTypes.GET_NEWS_SUCCESS, payload: data })
   const failed = (error) => ({ type: actionTypes.GET_NEWS_FAILED, payload: error })


   return dispatch => {
      dispatch(request())

      newsService.getNews()
         .then(response => response.json())
         .then(data => dispatch(success(data)))
         .catch(error => dispatch(failed(error)))
   }
}


const getOneNews = (id) => {
   const request = () => ({ type: actionTypes.GET_ONE_NEWS })
   const success = (data) => ({ type: actionTypes.GET_ONE_NEWS_SUCCESS, payload: data })
   const failed = (error) => ({ type: actionTypes.GET_ONE_NEWS_FAILED, payload: error })


   return dispatch => {
      dispatch(request())

      newsService.getOneNews(id)
         .then(response => response.json())
         .then(data => dispatch(success(data)))
         .catch(error => dispatch(failed(error)))
   }
}


const editOneNews = (body, id) => {
   const request = () => ({ type: actionTypes.EDIT_ONE_NEWS })
   const success = () => ({ type: actionTypes.EDIT_ONE_NEWS_SUCCESS })
   const failed = (error) => ({ type: actionTypes.EDIT_ONE_NEWS_FAILED, payload: error })


   return dispatch => {
      dispatch(request())

      newsService.editOneNews(body, id)
         .then(dispatch(success()))
         .catch(error => dispatch(failed(error)))
   }
}

const createNews = (body) => {
   const request = () => ({ type: actionTypes.CREATE_NEWS_REQUEST })
   const success = () => ({ type: actionTypes.CREATE_NEWS_SUCCESS })
   const failed = (error) => ({ type: actionTypes.CREATE_NEWS_FAILED, payload: error })

   return dispatch => {
      dispatch(request())

      newsService.createNews(body)
         .then(dispatch(success()))
         .catch(error => dispatch(failed(error)))
   }
}

export const newsActions = {
   getNews,
   createNews,
   getOneNews,
   editOneNews,
}