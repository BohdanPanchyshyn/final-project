import "./CreateNews.css";
import { useNavigate } from "react-router-dom";

const CreateNews = (news) => {
   const navigate = useNavigate();


   function editNews(id) {
      navigate(`/news/${id}`)

   }

   return (
      <div className="containerNews">
         <div className="blockNews">
            <h1 onClick={() => editNews(news._id)} className="createNewsTitle">{news.title}</h1>
            <div className="createNewsText">{news.text} {new Date(news.createdAt).toLocaleDateString()}</div>
            <img className="createNewsImg" src={news.image} />
         </div>
      </div>
   )
}

export default CreateNews;