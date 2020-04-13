import { User } from "./interfaces";
import { ApplicationContext } from "../interfaces";

export default (
  _: unknown,
  args: unknown,
  { dataSources }: ApplicationContext
): User[] => {
  return dataSources.userDataSource.allUsers();
};
