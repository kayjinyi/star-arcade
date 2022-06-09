// export const api = {
//     getScores: async function () {
//       return fetch("https://koolgamebackend.herokuapp.com/userscore");
//       // return await res.json();
     

//     },
//     createUser: async function (user) {
//       return fetch("https://koolgamebackend.herokuapp.com/userscore", {
//         method: "POST",
//         body: JSON.stringify(user),
//         headers: {
//           "Content-type": "application/json; charset=UTF-8",
//         },
//       });
//     },
//   };

export const api = {
  getScores: async function () {
    return fetch("http://localhost:3001/api/userscore");
    // return await res.json();
   

  },
  createUser: async function (user) {
    return fetch("http://localhost:3001/api/userscore", {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
  },
};