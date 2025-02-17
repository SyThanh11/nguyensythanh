class ApiResponse {
    status;
    message;
    data;
    constructor(status, message, data) {
        this.status = status;
        this.message = message;
        this.data = data;
    }
}
export default ApiResponse;
