var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { IsEmail, IsString, MinLength, Matches, IsNotEmpty } from 'class-validator';
class UserCreateRequest {
    name;
    email;
    password;
    constructor(data) {
        this.name = data.name || "";
        this.email = data.email || "";
        this.password = data.password || "";
    }
}
__decorate([
    IsNotEmpty(),
    IsString(),
    MinLength(6, {
        message: 'Username must be at least 6 characters long',
    }),
    __metadata("design:type", String)
], UserCreateRequest.prototype, "name", void 0);
__decorate([
    IsEmail({}, { message: 'Invalid email format' }),
    __metadata("design:type", String)
], UserCreateRequest.prototype, "email", void 0);
__decorate([
    IsString(),
    MinLength(6, {
        message: 'Password must be at least 6 characters long',
    }),
    Matches(/(?=.*[a-z])/, { message: 'Password must contain at least one lowercase letter' }),
    Matches(/(?=.*[A-Z])/, { message: 'Password must contain at least one uppercase letter' }),
    Matches(/(?=.*\d)/, { message: 'Password must contain at least one number' }),
    Matches(/(?=.*[!@#$%^&*(),.?":{}|<>])/, { message: 'Password must contain at least one special character' }),
    __metadata("design:type", String)
], UserCreateRequest.prototype, "password", void 0);
export default UserCreateRequest;
