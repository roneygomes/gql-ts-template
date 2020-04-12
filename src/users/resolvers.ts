import { User } from "./interfaces";
import { ApplicationContext } from "../interfaces";

export const users = (_: any, args: any, { dataSources }: ApplicationContext): User[] => {
  return dataSources.userDataSource.allUsers();
};