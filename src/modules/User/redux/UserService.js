export default class UserService {
  getUsers = api => {
    return fetch(api)
      .then(response => response.json())
      .then(json => json)
      .catch(error => {
        console.log("erro: ", error);
      });
  };
}
