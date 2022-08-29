import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { newsActions } from "../store/actions/news.actions";
import CreateNews from "../components/CreateNews";

const News = () => {
   const dispatch = useDispatch();
   const { news, loading } = useSelector(state => state.news)

   useEffect(() => {
      dispatch(newsActions.getNews())
   }, [])

   return (
      <div>
         {
            loading ?
               "Loading..." :
               news && news.length ?
                  news.map(el => (< CreateNews {...el} />)) :
                  news && (!news.length) ?
                     "news not found" :
                     null
         }
      </div>
   )
}


export default News;