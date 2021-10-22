import { getRepository } from 'typeorm';
import { NextFunction, Request, Response } from 'express';
import { Form } from '../entity/Form';

export class FormController {
  private formRepo = getRepository(Form);

  async all(request: Request, response: Response, next: NextFunction) {
    return this.formRepo
      .find()
      .then((data) => {
        console.log(data);
        return data;
      })
      .catch((err) => console.log(err));
  }

  async one(request: Request, response: Response, next: NextFunction) {
    return this.formRepo
      .findOne(request.params.id)
      .then((data) => {
        console.log(data);
        return data;
      })
      .catch((err) => console.log(err));
  }

  async save(request: Request, response: Response, next: NextFunction) {
    return this.formRepo
      .save(request.body)
      .then((data) => {
        console.log(data);
        return data;
      })
      .catch((err) => console.log(err));
  }

  async remove(request: Request, response: Response, next: NextFunction) {
    let formToRemove = await this.formRepo.findOne(request.params.id);
    const result = await this.formRepo
      .remove(formToRemove)
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