import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { newsActions } from "../store/actions/news.actions";
import "./AddNews.css";



const AddNews = () => {

   const dispatch = useDispatch();
   const loading = useSelector(state => state.news.addNewsLoading);

   const [title, setTitle] = useState("");
   const [text, setText] = useState("");
   const [image, setImage] = useState("");


   function onSubmit(e) {
      e.preventDefault();
      const body = {
         title: title,
         text: text,
         image: image,
      }
      dispatch(newsActions.createNews(body))
   }

   return (
      <div>
         <div>Додати Новину</div>
         <form onSubmit={onSubmit} className="formAddNews">
            <input onChange={(e) => setTitle(e.target.value)} value={title} placeholder="Заголовок" className="inputAddNews" required />
            <input onChange={(e) => setImage(e.target.value)} value={image} placeholder="Посилання на картинку" className="inputAddNews" required />
            <textarea onChange={(e) => setText(e.target.value)} value={text} placeholder="Текст новини" className="textAreaAddNews" required />
            <div className="boxButton">
               <button type="submit" className="buttonAddNews">
                  {
                     loading ? "Загрузка..." : "Додати"
                  }
               </button>
            </div>
         </form>
      </div>
   )
}


export default AddNews;