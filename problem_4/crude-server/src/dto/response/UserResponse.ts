import { IUser } from "../../interface/user.interface.js";

class UserResponse {
    id: number;
    name: string;
    email: string;
    createdAt: Date;
    updatedAt: Date;
  
    constructor(user: IUser) {
      this.id = user.id!;
      this.name = user.name;
      this.email = user.email;
      this.createdAt = user.createdAt!;
      this.updatedAt = user.updatedAt!;
    }
}

export default UserResponse;