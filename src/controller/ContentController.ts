import { getRepository } from 'typeorm';
import { NextFunction, Request, Response } from 'express';
import { Content } from '../entity/Content';

export class ContentController {
  private repo = getRepository(Content);

  async all(request: Request, response: Response, next: NextFunction) {
    return this.repo
      .find()
      .then((data) => {
        console.log(data);
        return data;
      })
      .catch((err) => console.log(err));
  }

  async one(request: Request, response: Response, next: NextFunction) {
    return this.repo
      .findOne(request.params.id)
      .then((data) => {
        console.log(data);
        return data;
      })
      .catch((err) => console.log(err));
  }

  async save(request: Request, response: Response, next: NextFunction) {
    return this.repo
      .save(request.body)
      .then((data) => {
        console.log(data);
        return data;
      })
      .catch((err) => console.log(err));
  }

  async remove(request: Request, response: Response, next: NextFunction) {
    let contentToRemove = await this.repo.findOne(request.params.id);
    const result = await this.repo
      .remove(contentToRemove)
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