import { IsEmail, IsNotEmpty, IsString, Matches, MinLength } from "class-validator";

class UserUpdateRequest {
    @IsNotEmpty()
    @IsString()
    @MinLength(6, {
        message: 'Username must be at least 6 characters long',
    })
    name?: string;

    @IsEmail({}, { message: 'Invalid email format' })
    email?: string;

    @IsString()
    @MinLength(6, {
        message: 'Password must be at least 6 characters long',
    })
    @Matches(/(?=.*[a-z])/, { message: 'Password must contain at least one lowercase letter' })
    @Matches(/(?=.*[A-Z])/, { message: 'Password must contain at least one uppercase letter' })
    @Matches(/(?=.*\d)/, { message: 'Password must contain at least one number' })
    @Matches(/(?=.*[!@#$%^&*(),.?":{}|<>])/, { message: 'Password must contain at least one special character' })
    password?: string;
  
    constructor(data: Partial<UserUpdateRequest>) {
      this.name = data.name;
      this.email = data.email;
      this.password = data.password;
    }
}

export default UserUpdateRequest;