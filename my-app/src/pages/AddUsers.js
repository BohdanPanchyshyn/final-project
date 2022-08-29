import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../store/actions/users.actions";
import { actionTypes } from "../store/actionsTypes";

const AddUsers = () => {

   const dispatch = useDispatch();
   const loading = useSelector(state => state.users.addUserLoading)

   const [name, setName] = useState("");
   const [username, setUsername] = useState("");
   const [avatarLink, setAvatarLink] = useState("");



   function onSubmit(e) {
      e.preventDefault();
      const body = {
         name: name,
         username: username,
         avatarLink: avatarLink,
      }
      dispatch(userActions.createUser(body))
      setName("");
      setUsername("");
      setAvatarLink("");
   }



   return (
      <>
         <div>Додати користувача</div>
         <form onSubmit={onSubmit}>
            <input onChange={(e) => setName(e.target.value)} value={name} placeholder="Ім'я" required />
            <input onChange={(e) => setUsername(e.target.value)} value={username} placeholder="Usernickname" required />
            <input onChange={(e) => setAvatarLink(e.target.value)} value={avatarLink} placeholder="Посилання на аватар" required />
            <button type="submit">
               {
                  loading ? "Загрузка..." : "Додати"
               }
            </button>
         </form>
      </>
   )
}

export default AddUsers;