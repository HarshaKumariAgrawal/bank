
import { getRepository } from 'typeorm';
import { NextFunction, Request, Response } from 'express';
import { User } from '../entity/User';

export class UserController {
  private userRepository = getRepository(User);

  async all(request: Request, response: Response, next: NextFunction) {
    return this.userRepository
      .find()
      .then((data) => {
        console.log(data);
        return data;
      })
      .catch((err) => console.log(err));
  }

  async one(request: Request, response: Response, next: NextFunction) {
    return this.userRepository
      .findOne(request.params.id)
      .then((data) => {
        console.log(data);
        return data;
      })
      .catch((err) => console.log(err));
  }

  async save(request: Request, response: Response, next: NextFunction) {
    return this.userRepository
      .save(request.body)
      .then((data) => {
        console.log(data);
        return data;
      })
      .catch((err) => console.log(err));
  }

  async remove(request: Request, response: Response, next: NextFunction) {
    let userToRemove = await this.userRepository.findOne(request.params.id);
    const result = await this.userRepository
      .remove(userToRemove)
      .then((data) => {
        console.log(data);
        return data;
      })
      .catch((err) => {
        console.log(err);
        return err;
      });

    return result;
  }
}