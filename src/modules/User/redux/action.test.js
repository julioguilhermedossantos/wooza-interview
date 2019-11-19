// import * as Actions from "../components/ListaUsuarios/redux/action";
// import * as Types from "../components/ListaUsuarios/redux/type";
const Action = require("./action");
const Types = require("./types");

describe("Actions", () => {
  it("Deve listar usuarios", () => {
    const expectedAction = {
      type: Types.GET_USERS
    };
    expect(Action.getUsersAction()).toEqual(expectedAction);
  });
  it("Deve setar usuarios", () => {
    const users = [
      {
        nome: "Júlio",
        cargo: "Programador Pleno",
        foto: "https://api.adorable.io/avatars/233/JúlioGuilherme.png",
        skills: ["JS", "React", "NodeJS"]
      },
      {
        nome: "Rodrigo",
        cargo: "Programador Pleno",
        foto: "https://api.adorable.io/avatars/233/Rodrigo.png",
        skills: ["Java", "JS", "React"]
      },
      {
        nome: "David",
        cargo: "Programador Senior",
        foto: "https://api.adorable.io/avatars/233/David.png",
        skills: ["React", "PHP", "JS"]
      },
      {
        nome: "Thiago",
        cargo: "Programador Analista",
        foto: "https://api.adorable.io/avatars/233/Thiago.png",
        skills: ["PHP", "JS"]
      },
      {
        nome: "Benilson",
        cargo: "Programador Analista",
        foto: "https://api.adorable.io/avatars/233/Benilson.png",
        skills: ["PHP"]
      },
      {
        nome: "John Wick",
        cargo: "Assassino",
        foto: "https://api.adorable.io/avatars/233/John.png",
        skills: ["Pistol", "Knife", "Rifle"]
      }
    ];
    const expectedAction = {
      type: Types.SET_USERS,
      payload: { users }
    };
    expect(Action.setUsersAction(users)).toEqual(expectedAction);
  });
});
