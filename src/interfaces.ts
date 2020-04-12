import { UserDataSource } from "./users/dataSource";

export interface ApplicationContext {
  dataSources: DataSources;
}

export interface DataSources {
  userDataSource: UserDataSource;
}