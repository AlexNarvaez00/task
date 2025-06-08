import { Response } from "express";

export class ResponseHandler {
  static ok<T>(body: T, response: Response) {
    response.status(200);
    response.json(body);
  }

  static error<T>(body: T, response: Response) {
    response.status(400);
    response.json(body);
  }
}
