class NewsClient {
   constructor() {
      this.api = "http://localhost:3000/api";
      this.news = "/news";
   }

   async getNews() {
      return await fetch(this.api + this.news);
   }

   async getOneNews(id) {
      return await fetch(`${this.api}/${this.news}/${id}`)
   }

   async createNews(body) {
      return await fetch(this.api + this.news, {
         method: "POST",
         headers: {
            "Content-Type": "application/json"
         },
         body: JSON.stringify(body),
      });
   }

   async editOneNews(body, id) {
      return await fetch(`${this.api}/${this.news}/${id}`, {
         method: "PATCH",
         headers: {
            "Content-Type": "application/json"
         },
         body: JSON.stringify(body),
      });
   }
}

export const newsService = new NewsClient();