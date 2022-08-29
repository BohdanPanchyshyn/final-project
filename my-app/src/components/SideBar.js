import { Link } from "react-router-dom";
import "./SideBar.css";

const SideBar = () => {
   return (
      <>
         <div className="sidebar">Final Project
            <ul className="sidebarUl">
               <li className="sidebarUlLi">
                  <Link to="/users" className="sidebarText">Users</Link>
               </li>
               <li className="sidebarUlLi">
                  <Link to="/addUsers" className="sidebarText">Add Users</Link>
               </li>
               <li className="sidebarUlLi">
                  <Link to="/news" className="sidebarText">News</Link>
               </li>
               <li className="sidebarUlLi">
                  <Link to="/addNews" className="sidebarText">Add News</Link>
               </li>
            </ul>
         </div>
      </>
   )
}

export default SideBar;