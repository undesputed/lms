import { CustomError } from "./customError";

export class DatabaseConnectionError extends CustomError {
  statusCode = 500;
  reason = "Error connecting to Database";

  constructor() {
    super("Error connecting to Database");

    Object.setPrototypeOf(this, DatabaseConnectionError.prototype);
  }

  serializeErrors() {
    return [
      {
        message: this.reason,
      },
    ];
  }
}
