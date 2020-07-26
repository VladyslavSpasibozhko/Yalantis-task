import axios from "axios";
import { groupUsers } from "./groupUsers";

const usersApi =
  "https://yalantis-react-school-api.yalantis.com/api/task0/users";

export const getUsers = async () => {
  try {
    const users = await axios.get(usersApi);
    return groupUsers(users.data);
  } catch (e) {
    console.log(e);
    return {};
  }
};
