import UserDataSource from "./users/dataSource";

export interface ApplicationContext {
  dataSources: ApplicationDataSources;
}

export interface ApplicationDataSources {
  userDataSource: UserDataSource<ApplicationContext>;
}
