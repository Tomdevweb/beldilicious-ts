// Si à un moment donné vous devez changer la source de données (par exemple, passer d'un fichier JSON local à un backend ou à une autre API), il suffit de modifier la fonction extérieure. Le reste du code, notamment le thunk et les reducers, reste inchangé.
// En isolant la logique de récupération des données dans une fonction distincte, vous séparez les responsabilités de votre code. createAsyncThunk se concentre uniquement sur la gestion des actions Redux, tandis que la fonction extérieure gère l'obtention des données. Cela rend chaque partie du code plus lisible et plus facile à comprendre.
import restaurantsData from "../data/restaurants.json";

export const fetchRestaurants = async () => {
  const res = { data: restaurantsData };
  return res;
};
