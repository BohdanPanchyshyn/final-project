import { useDispatch, useSelector } from "react-redux";
import { newsService } from "../service/news.service";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { newsActions } from "../store/actions/news.actions";
import "./AddNews.css";

const NewsEdit = () => {


   const dispatch = useDispatch();
   const { chosenNews, loading } = useSelector(state => state.news);
   const { id } = useParams();
   const [text, setText] = useState("");
   const [title, setTitle] = useState("");
   const [image, setImage] = useState("");


   useEffect(() => {
      dispatch(newsActions.getOneNews(id))
   }, [])

   useEffect(() => {
      if (chosenNews?.text) setText(chosenNews.text)
      if (chosenNews?.title) setTitle(chosenNews.title)
      if (chosenNews?.image) setImage(chosenNews.image)
   }, [chosenNews])


   function onSubmit(e) {
      e.preventDefault();
      const body = {
         title: title,
         text: text,
         image: image,
      }
      dispatch(newsActions.editOneNews(body, id))
      alert("Збережено!")
   }



   return (

      chosenNews ? <div> Редагування новини <form onSubmit={onSubmit} className="formAddNews">
         <input placeholder="title" value={title} onChange={(e) => setTitle(e.target.value)} className="inputAddNews" />
         <input placeholder="img" value={image} onChange={(e) => setImage(e.target.value)} className="inputAddNews" />
         <textarea placeholder="text" value={text} onChange={(e) => setText(e.target.value)} className="textAreaAddNews" />
         <div className="boxButton">
            <button type="submit" className="buttonAddNews">{loading ? "Загрузка..." : "Зберегти"}</button>
         </div>
      </form>
      </div> : <div>Загрузка...</div>

   )
}

export default NewsEdit;