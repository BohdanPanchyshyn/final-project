import { userService } from "../../service/users.service";
import { actionTypes } from "../actionsTypes";



const getUsers = () => {
   const request = () => ({ type: actionTypes.GET_USERS })
   const success = (data) => ({ type: actionTypes.GET_USERS_SUCCESS, payload: data })
   const failed = (error) => ({ type: actionTypes.GET_USERS_FAILED, payload: error })


   return dispatch => {
      dispatch(request())

      userService.getUsers()
         .then(response => response.json())
         .then(data => dispatch(success(data)))
         .catch(error => dispatch(failed(error)))
   }
}


const createUser = (body) => {
   const request = () => ({ type: actionTypes.CREATE_USER_REQUEST })
   const success = () => ({ type: actionTypes.CREATE_USER_SUCCESS })
   const failed = (error) => ({ type: actionTypes.CREATE_USER_FAILED, payload: error })

   return dispatch => {
      dispatch(request())

      userService.createUser(body)
         .then(dispatch(success()))
         .catch(error => dispatch(failed(error)))
   }
}

export const userActions = {
   getUsers,
   createUser,
}