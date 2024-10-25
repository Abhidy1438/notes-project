export class ApiResponse {
  constructor(statuscode, payload, message) {
    this.statuscode = statuscode;
    this.payload = payload;
    this.message = message;
    this.sucess = statuscode < 400;
  }
}
