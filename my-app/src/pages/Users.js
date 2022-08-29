import React, { useState, useEffect } from "react";
import { userActions } from "../store/actions/users.actions";
import { useDispatch, useSelector } from "react-redux";
import CreateUser from "../components/CreateUser";

const Users = () => {

   const dispatch = useDispatch()
   const { users, loading } = useSelector(state => state.users)

   useEffect(() => {
      dispatch(userActions.getUsers())
   }, [])

   useEffect(() => {
      if (users) console.log(users);
   }, [users])


   return (
      <div>
         {
            loading ?
               "Loading..." :
               users && users.length ?
                  users.map(el => (<CreateUser {...el} />)) :
                  users && (!users.length) ?
                     "Users not found" :
                     null
         }
      </div>
   )


}

export default Users;