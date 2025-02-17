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
export default UserCreateRequest;
