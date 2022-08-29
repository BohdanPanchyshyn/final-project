import SideBar from "../components/SideBar";
import Users from "../pages/Users";
import AddUsers from "../pages/AddUsers";
import { Routes, Route } from "react-router-dom";
import News from "../pages/News";
import AddNews from "../pages/AddNews";
import NewsEdit from "../pages/NewsEdit";


const RootNavigator = () => {
   return (
      <>
         <SideBar />
         <Routes>
            <Route path="/users" element={<Users />} />
            <Route path="/addUsers" element={<AddUsers />} />
            <Route path="/news" element={<News />} />
            <Route path="/addNews" element={<AddNews />} />
            <Route path="/news/:id" element={<NewsEdit />} />
         </Routes>
      </>
   )
}

export default RootNavigator;