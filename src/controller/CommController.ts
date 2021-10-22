import { getRepository } from 'typeorm';
import { NextFunction, Request, Response } from 'express';
import { Comm } from '../entity/Comm';

export class CommController {
  private commRepo = getRepository(Comm);

  async all(request: Request, response: Response, next: NextFunction) {
    return this.commRepo
      .find()
      .then((data) => {
        console.log(data);
        return data;
      })
      .catch((err) => console.log(err));
  }

  async one(request: Request, response: Response, next: NextFunction) {
    return this.commRepo
      .findOne(request.params.id)
      .then((data) => {
        console.log(data);
        return data;
      })
      .catch((err) => console.log(err));
  }

  async save(request: Request, response: Response, next: NextFunction) {
    return this.commRepo
      .save(request.body)
      .then((data) => {
        console.log(data);
        return data;
      })
      .catch((err) => console.log(err));
  }

  async remove(request: Request, response: Response, next: NextFunction) {
    let commToRemove = await this.commRepo.findOne(request.params.id);
    const result = await this.commRepo
      .remove(commToRemove)
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