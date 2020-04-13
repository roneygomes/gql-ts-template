import { DataSource } from "apollo-datasource";
import { User } from "./interfaces";

export default class UserDataSource<T> extends DataSource<T> {
  private readonly users: User[];

  constructor() {
    super();

    this.users = [
      {
        id: "844b1e32-665f-4195-b660-92ba075caa94",
        email: "user-one@example.com",
      },
      {
        id: "5447a3fc-ea9b-43a5-9149-5ba325894c68",
        email: "user-two@example.com",
      },
    ];
  }

  allUsers(): User[] {
    return Array.from(this.users);
  }
}
