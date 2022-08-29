import "./CreateUser.css";

const CreateUser = (user) => {

   console.log(user);

   return (
      <div className="containerUser">
         <div className="blockUser">

            <div className="blockImgAndUsername">
               <img className="createUsersImg" src={user.avatarLink} />
               <div className="createUserText">@{user.username}</div>
            </div>
            <h1 className="createUserTitle">{user.name}</h1>
         </div>
      </div>

   )
}

export default CreateUser;