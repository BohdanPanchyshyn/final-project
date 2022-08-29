class UserClient {
   constructor() {
      this.api = "http://localhost:3000/api";
      this.users = "/users";
   }

   async getUsers() {
      return await fetch(this.api + this.users);
   }

   async createUser(body) {
      return await fetch(this.api + this.users, {
         method: "POST",
         headers: {
            "Content-Type": "application/json"
         },
         body: JSON.stringify(body),
      });
   }
}

export const userService = new UserClient();