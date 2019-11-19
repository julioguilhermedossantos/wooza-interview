export default class UserService {
  getUsers = () => {
    const getUsersURL = "assets/users.json";
    return fetch(getUsersURL)
      .then(response => response.json())
      .then(json => json)
      .catch(error => {
        console.log("erro: ", error);
      });
  };
}
